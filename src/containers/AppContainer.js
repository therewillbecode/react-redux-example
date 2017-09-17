import React, { PureComponent } from "react";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import auth0 from "auth0-js";

import AssetsContainer from "./AssetsContainer"; //
import AssetItemContainer from "./AssetItemContainer"; //
import ProfileContainer from "./ProfileContainer";
import App from "../components/App";
import AppHeader from "../components/AppHeader";
import Loading from "../components/Loading";
import RequireAuth from "./HOC/RequireAuth";
import { authSuccess, loggedOut, fetchProfile } from "../actions/index";
import { isAuthenticated } from "../selectors/index";

const auth0Domain = "therewillbecode.auth0.com";
const auth0ClientId = "2yqWzBSv0zfQEstOyMveQBu4Rw3bqbiT";
const auth0CallbackUrl = "http://localhost:3000/loading";

export class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.history = createHistory();
    this.history.listen(({ pathname, hash }) => {
      if (pathname === /access_token|id_token|error/.test(hash)) {
        this.handleAuthentication();
      }
    });

    this.auth0 = new auth0.WebAuth({
      domain: auth0Domain,
      clientID: auth0ClientId,
      redirectUri: auth0CallbackUrl,
      audience: `https://${auth0Domain}/userinfo`,
      responseType: "token id_token",
      scope: "openid profile"
    });
  }

  componentDidMount() {
    const token = localStorage.getItem("access_token");

    // If we have a token, consider the user to be signed in and update state
    if (token && !this.props.isAuthenticated) {
      this.props.authSuccess();
    }
    if (token && !this.props.profile) {
      this.props.fetchProfile(token);
    }
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (err) {
        this.history.replace("/");
      } else {
        this.props.authSuccess();
        this.setSession(authResult);
        this.history.replace("/assets");
      }
    });
  }

  setSession({ expiresIn, idToken, accessToken }) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem("id_token", idToken);
    localStorage.setItem("access_token", accessToken);
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
    const { isAuthenticated, downloadInventoryCSV, profile } = this.props;

    return (
      <Router history={this.history}>
        <div style={{ width: "100%", height: "100%" }}>
          <AppHeader
            login={this.login}
            logout={this.logout}
            isAuthenticated={isAuthenticated}
            downloadInventoryCSV={downloadInventoryCSV}
            profile={profile}
          />
          <Route
            exact
            path="/"
            component={() => (
              <App login={this.login} isAuthenticated={isAuthenticated} />
            )}
          />
          <Route exact path="/profile" component={ProfileContainer} />
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
    isAuthenticated: isAuthenticated(state),
    profile: state.get("auth").get("profile")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authSuccess: idToken => {
      dispatch(authSuccess(idToken));
    },
    fetchProfile: token => dispatch(fetchProfile(token)),
    loggedOut: () => {
      dispatch(loggedOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
