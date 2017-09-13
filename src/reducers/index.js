import { combineReducers } from "redux";

import assets from "./assets";
import auth from "./auth";

export default combineReducers({
  assets,
  auth
});
