import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import App from "../components/App";
import Assets from "../components/Assets";
import Loading from "../components/Loading";
import AppHeader from "../components/AppHeader";

import RequireAuth from "./HOC/RequireAuth";

import { isAuthenticated } from "../selectors/index";

class AppContainer extends Component {
  render() {
    const { isAuthenticated, auth, handleAuthentication, history } = this.props;

    return (
      <Router history={history} component={App}>
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
              handleAuthentication(props);
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

export default connect(mapStateToProps)(AppContainer);
