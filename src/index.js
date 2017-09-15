/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, autoRehydrate } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";

import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index";
import "semantic-ui-css/semantic.min.css";
import { downloadCSV } from "./utils";

export const downloadInventoryCSV = () =>
  downloadCSV(
    JSON.stringify(store.getState().assets.toJS()).replace("[", " \n [")
  );

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
);

persistStore(store, {
  transforms: [immutableTransform()]
});

render(
  <Provider store={store}>
    <AppContainer downloadInventoryCSV={downloadInventoryCSV} />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
