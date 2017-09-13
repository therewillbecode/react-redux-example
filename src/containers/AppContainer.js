import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { connect } from "react-redux";
import auth0 from "auth0-js";

import App from "../components/App";
import Assets from "../components/Assets";
import Loading from "../components/Loading";
import AppHeader from "../components/AppHeader";
import RequireAuth from "./HOC/RequireAuth";

import { authSuccess, loggedOut } from "../actions/index";
import { isAuthenticated } from "../selectors/index";
import { AUTH_CONFIG } from "./auth/auth-config";

const { domain, clientId, callbackUrl } = AUTH_CONFIG;

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

class AppContainer extends Component {
  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.history = createHistory();

    this.auth0 = new auth0.WebAuth({
      domain,
      clientID: clientId,
      redirectUri: callbackUrl,
      audience: `https://${domain}/userinfo`,
      responseType: "token id_token",
      scope: "openid"
    });
  }

  componentDidMount() {
    this.idToken = localStorage.getItem("id_token");

    // If we have a token, consider the user to be signed in and update state
    if (idToken) {
      const accessToken = localStorage.getItem("access_token");
      store.dispatch(authSuccess(accessToken, idToken));
    }
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.history.replace("/assets");
      } else if (err) {
        this.history.replace("/");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession({ expiresIn, idToken, accessToken }) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(expiresIn * 1000 + new Date().getTime());
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("id_token", idToken); // JSON web token - decode on server side
    localStorage.setItem("expires_at", expiresAt);
    this.props.authSuccess(accessToken, idToken);
    // navigate to the assets route
    this.history.replace("/assets");
  }

  logout() {
    console.log("logged out");
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
    const { isAuthenticated, auth, handleAuthentication } = this.props;

    return (
      <Router history={this.history} component={App}>
        <div>
          <AppHeader
            login={auth.login}
            logout={auth.logout}
            isAuthenticated={isAuthenticated}
          />
          <Route path="/" render={props => <App auth={auth} {...props} />} />
          <Route path="/assets" render={props => <Assets {...props} />} />
          <Route
            path="/loading"
            render={props => {
              this.handleAuthentication(props);
              return <Loading {...props} />;
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
    authSuccess: (idToken, accessToken) => {
      dispatch(authSucess(idToken, accessToken));
    },
    loggedOut: () => {
      dispatch(loggedOut());
    }
  };
};

export default connect(mapStateToProps)(mapDispatchToProps)(AppContainer);
