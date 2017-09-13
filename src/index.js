/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import App from "./App";
import registerServiceWorker from "../service_worker/registerServiceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <div />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
