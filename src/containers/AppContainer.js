import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import { isAuthenticated } from "./selectors/index";
import "./App.css";

class AppContainer extends Component {
  render() {
    const { isAuthenticated } = this.props;

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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
