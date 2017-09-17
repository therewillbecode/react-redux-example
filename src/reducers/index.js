import { combineReducers } from "redux-immutable";

import assets from "./assets";
import auth from "./auth";

export default combineReducers({
  assets,
  auth
});
