import { Map } from "immutable";

import { AUTH_SUCCESS, LOGGED_OUT } from "../actions/types";

const initialState = Map({
  isAuthenticated: false
});

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return Map({
        isAuthenticated: true
      });
    }

    case LOGGED_OUT: {
      return Map({
        isAuthenticated: false
      });
    }

    default:
      return state;
  }
}
