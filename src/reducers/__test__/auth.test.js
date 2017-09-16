/* eslint-disable */
import { Map, fromJS } from "immutable";
import reducer from "../auth";
import * as actions from "../../actions/index";

const initialState = Map({
  isAuthenticated: true,
  profile: null
});

describe("auth reducer", () => {
  it("should return the initial state", () => {
    const expectedState = Map({
      isAuthenticated: false,
      profile: null
    });
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle authentication success", () => {
    const initialState = Map({
      isAuthenticated: false,
      profile: null
    });
    const expectedState = Map({
      isAuthenticated: true,
      profile: null
    });

    expect(reducer(initialState, actions.authSuccess())).toEqual(expectedState);
  });

  it("should handle logout", () => {
    const expectedState = Map({
      isAuthenticated: false,
      profile: null
    });

    expect(reducer(initialState, actions.loggedOut())).toEqual(expectedState);
  });

  it("should handle logout", () => {
    const initialState = Map({
      isAuthenticated: false,
      profile: { firstName: "Foo", lastName: "Bar" }
    });
    const expectedState = Map({
      isAuthenticated: false,
      profile: null
    });

    expect(reducer(initialState, actions.loggedOut())).toEqual(expectedState);
  });

  it("should handle receiveProfile", () => {
    const data = { firstName: "Foo", lastName: "Bar" };
    const expectedState = Map({
      isAuthenticated: true,
      profile: data
    });

    expect(reducer(initialState, actions.receiveProfile(data))).toEqual(
      expectedState
    );
  });
});
