import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import App from "../components/App";
import Home from "../components/Home";
import Loading from "../components/Loading";
import AppHeader from "../components/AppHeader";

import RequireAuth from "./HOC/RequireAuth";

import { isAuthenticated } from "./selectors/index";

import createHistory from "history/createBrowserHistory";

const history = createHistory();

class AppContainer extends Component {
  render() {
    const { isAuthenticated, auth, handleAuthentication } = this.props;

    return (
      <Router history={history} component={App}>
        <div>
          <AppHeader isAuthenticated={isAuthenticated} />
          <Route path="/" render={props => <App auth={auth} {...props} />} />
          <Route path="/home" render={props => <Home {...props} />} />
          <Route path="/assets" render={props => <Home {...props} />} />
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

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
