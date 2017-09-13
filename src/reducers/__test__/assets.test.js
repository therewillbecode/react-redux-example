import { List } from "immutable";

import reducer from "../assets";
import * as types from "../../actions/types";

describe("assets reducer", () => {
  it("should return the initial state", () => {
    const expectedState = List([]);
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });
});
