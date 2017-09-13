import { Map } from "immutable";

import { AUTH_SUCCESS, LOGGED_OUT } from "../actions/types";

const initialState = Map({
  isAuthenticated: false,
  accessToken: null,
  idToken: null
});

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return Map({
        isAuthenticated: true,
        accessToken: action.accessToken,
        idToken: action.idToken
      });
    }

    case LOGGED_OUT: {
      return Map({
        isAuthenticated: false,
        accessToken: null,
        idToken: null
      });
    }

    default:
      return state;
  }
}
