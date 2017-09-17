/* eslint-env browser */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Immutable from "immutable";
import { persistStore, autoRehydrate } from "redux-persist-immutable";
import { composeWithDevTools } from "redux-devtools-extension";

import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/index";
import { downloadCSV } from "./utils";

import "semantic-ui-css/semantic.min.css";

export const downloadInventoryCSV = () =>
  downloadCSV(
    JSON.stringify(store.getState().assets.toJS()).replace("[", " \n [")
  );

const middleware = [thunk];
const initialState = Immutable.Map({});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware), autoRehydrate())
);

persistStore(store, {}, () => {
  //  console.log("rehydration complete");
});

render(
  <Provider store={store}>
    <AppContainer downloadInventoryCSV={downloadInventoryCSV} />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
