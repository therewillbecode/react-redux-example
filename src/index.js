/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import { composeWithDevTools } from "redux-devtools-extension";

import registerServiceWorker from "./registerServiceWorker";
import App from "./components/App";
import Home from "./components/Home";
import rootReducer from "./reducers/index";
import Loading from "./components/Loading";
import auth from "./auth/auth";
import { authSuccess } from "./actions/index";

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

const jwtToken = localStorage.getItem("id_token");

// If we have a token, consider the user to be signed in and update state
if (jwtToken) {
  const accessToken = localStorage.getItem("access_token");
  store.dispatch(authSuccess(accessToken, jwtToken));
}

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

export const history = createHistory();
export const routes = (
  <Router history={history} component={App}>
    <div>
      <Route path="/" render={props => <App auth={auth} {...props} />} />
      <Route path="/home" render={props => <Home auth={auth} {...props} />} />
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

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);

registerServiceWorker();
