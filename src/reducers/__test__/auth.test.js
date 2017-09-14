/* eslint-disable */
/* eslint-disable */
import { Map, fromJS } from "immutable";
import reducer from "../auth";
import * as actions from "../../actions/index";

describe("auth reducer", () => {});

describe("auth reducer", () => {
  it("should return the initial state", () => {
    const expectedState = Map({
      isAuthenticated: false,
      idToken: null
    });
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });

  it("should handle authentication success", () => {
    const idToken = "kljn490dcjkD3r456d30i";
    const initialState = Map({
      isAuthenticated: false,
      idToken: null
    });
    const expectedState = Map({
      isAuthenticated: true,
      idToken
    });

    expect(reducer(initialState, actions.authSuccess(idToken))).toEqual(
      expectedState
    );
  });

  it("should handle logout", () => {
    const idToken = "kljn490dcjkD3r456d30i";
    const initialState = Map({
      isAuthenticated: true,
      idToken
    });
    const expectedState = Map({
      isAuthenticated: false,
      idToken: null
    });

    expect(reducer(initialState, actions.loggedOut())).toEqual(expectedState);
  });
});
