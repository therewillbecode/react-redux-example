/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import registerServiceWorker from "./registerServiceWorker";

import AppContainer from "./containers/AppContainer";

import rootReducer from "./reducers/index";
import Auth from "./auth/auth";
import { authSuccess } from "./actions/index";

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

export const auth = new Auth();
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

render(
  <Provider store={store}>
    <AppContainer auth={auth} handleAuthentication={handleAuthentication} />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
