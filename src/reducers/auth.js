import { Map } from "immutable";

import { AUTH_SUCCESS, LOGGED_OUT, RECEIVE_PROFILE } from "../actions/types";

const initialState = Map({
  isAuthenticated: false,
  profile: null
});

export default function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS: {
      return state.set("isAuthenticated", true);
    }

    case LOGGED_OUT: {
      return initialState;
    }

    case RECEIVE_PROFILE: {
      return state.set("profile", action.data);
    }

    default:
      return state;
  }
}
