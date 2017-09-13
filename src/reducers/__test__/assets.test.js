/* eslint-disable */
import { List, fromJS } from "immutable";

import reducer from "../assets";
import * as types from "../../actions/types";

describe("assets reducer", () => {
  it("should return the initial state", () => {
    const expectedState = List([]);
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });

  it("should handle RECEIVE_ASSET", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.RECEIVE_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should handle DISPATCH_ASSET for received assets", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.DISPATCH_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should not be able to dispatch assets which are already marked dispatched", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.DISPATCH_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should handle EDIT_ASSET for received assets", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should not allow editing of dispatched assets", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });
});
