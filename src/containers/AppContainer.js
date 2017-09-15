import React, { Component } from "react";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import auth0 from "auth0-js";

import AssetsContainer from "./AssetsContainer"; //
import AssetItemContainer from "./AssetItemContainer"; //
import App from "../components/App";
import AppHeader from "../components/AppHeader";
import Loading from "../components/Loading";
import RequireAuth from "./HOC/RequireAuth";
import { authSuccess, loggedOut } from "../actions/index";
import { isAuthenticated } from "../selectors/index";

const auth0Domain = "therewillbecode.auth0.com";
const auth0ClientId = "2yqWzBSv0zfQEstOyMveQBu4Rw3bqbiT";
const auth0CallbackUrl = "http://localhost:3000/loading";

export class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.history = createHistory();
    this.history.listen(({ pathname, hash }) => {
      if (pathname === "/loading" && /id_token|error/.test(hash)) {
        this.handleAuthentication();
      }
    });

    this.auth0 = new auth0.WebAuth({
      domain: auth0Domain,
      clientID: auth0ClientId,
      redirectUri: auth0CallbackUrl,
      audience: `https://${auth0Domain}/userinfo`,
      responseType: "id_token",
      scope: "openid profile"
    });
  }

  componentDidMount() {
    const idToken = localStorage.getItem("id_token");

    // If we have a token, consider the user to be signed in and update state
    if (idToken) {
      this.props.authSuccess(idToken);
    }
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    //  console.log("called");
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.idToken) {
        this.setSession(authResult);
        this.history.replace("/assets");
      } else if (err) {
        this.history.replace("/");
      }
    });
  }

  setSession({ expiresIn, idToken }) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem("id_token", idToken); // JSON web token - decode on server side
    localStorage.setItem("expires_at", expiresAt);
    this.props.authSuccess(idToken);
    // navigate to the assets route
    this.history.replace("/assets");
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.props.loggedOut();
    // navigate to the home route
    this.history.replace("/");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  render() {
    const { isAuthenticated, downloadInventoryCSV } = this.props;

    return (
      <Router history={this.history}>
        <div style={{ width: "100%", height: "100%" }}>
          <AppHeader
            login={this.login}
            logout={this.logout}
            isAuthenticated={isAuthenticated}
            downloadInventoryCSV={downloadInventoryCSV}
          />
          <Route
            exact
            path="/"
            component={() => (
              <App login={this.login} isAuthenticated={isAuthenticated} />
            )}
          />
          <Route path="/assets" component={RequireAuth(AssetsContainer)} />
          <Route
            path="/asset/:id"
            component={RequireAuth(AssetItemContainer)}
          />
          <Route
            path="/loading"
            render={props => {
              return (
                <Loading
                  handleAuthentication={this.handleAuthentication}
                  {...props}
                />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: isAuthenticated(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authSuccess: idToken => {
      dispatch(authSuccess(idToken));
    },
    loggedOut: () => {
      dispatch(loggedOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
