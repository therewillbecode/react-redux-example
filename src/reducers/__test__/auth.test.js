/* eslint-disable */
import { Map, fromJS } from "immutable";
import reducer from "../auth";
import * as actions from "../../actions/index";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    const expectedState = Map({
      isAuthenticated: false
    });
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });

  it("should handle authentication success", () => {
    const initialState = Map({
      isAuthenticated: false
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
    const initialState = Map({
      isAuthenticated: true
    });
    const expectedState = Map({
      isAuthenticated: false
    });

    expect(reducer(initialState, actions.loggedOut())).toEqual(expectedState);
  });
});
