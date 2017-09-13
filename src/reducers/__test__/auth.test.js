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
      accessToken: null,
      idToken: null
    });
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });

  it("should handle authentication success", () => {
    const accessToken = "jf894jdI42awae4f53";
    const idToken = "kljn490dcjkD3r456d30i";
    const initialState = Map({
      isAuthenticated: false,
      accessToken: null,
      idToken: null
    });
    const expectedState = Map({
      isAuthenticated: true,
      accessToken,
      idToken
    });

    expect(
      reducer(initialState, actions.authSuccess(accessToken, idToken))
    ).toEqual(expectedState);
  });

  it("should handle logout", () => {
    const accessToken = "jf894jdI42awae4f53";
    const idToken = "kljn490dcjkD3r456d30i";
    const initialState = Map({
      isAuthenticated: true,
      accessToken,
      idToken
    });
    const expectedState = Map({
      isAuthenticated: false,
      accessToken: null,
      idToken: null
    });

    expect(reducer(initialState, actions.loggedOut())).toEqual(expectedState);
  });
});
