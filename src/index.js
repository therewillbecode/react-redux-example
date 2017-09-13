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
import rootReducer from "./reducers/index";

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

const history = createHistory();

<Router history={history} component={App}>
  <div>
    <Route path="/" render={props => <App {...props} />} />
    <Route
      path="/loading"
      render={props => {
        return <Loading {...props} />;
      }}
    />
  </div>
</Router>;

render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);

registerServiceWorker();
