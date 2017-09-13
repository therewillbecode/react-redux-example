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
    const dispatchedTimestamp = "1605890201";

    expect(
      reducer(initialState, {
        type: types.DISPATCH_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp
      })
    ).toEqual(expectedState);
  });

  it("should not be able to dispatch assets which are already marked dispatched", () => {
    const initialState = List([]);
    const expectedState = List([
      {
        type: types.DISPATCH_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: "1605890201"
      }
    ]);

    expect(
      reducer(initialState, {
        type: types.DISPATCH_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: "1605890201"
      })
    ).toEqual(expectedState);
  });

  it("should handle EDIT_ASSET of name for received assets", () => {
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

    const updateObj = { name: "3d printer" };

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "3d printer",
        id: "h28S97Sn3",
        comment: "aerial kit for data collection",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should handle EDIT_ASSET of comment for received assets", () => {
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

    const updateObj = { comment: "aerial kit for data collection" };

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit for data collection",
        state: "received",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: null
      })
    ).toEqual(expectedState);
  });

  it("should not permit editing of id", () => {
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

    const updateObj = { id: "jmf93jhn" };

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit for data collection",
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
        dispatchedTimestamp: "1605890201"
      }
    ]);

    const updateObj = { comment: "aerial kit for data collection" };

    expect(
      reducer(initialState, {
        type: types.EDIT_ASSET,
        name: "drone",
        id: "h28S97Sn3",
        comment: "aerial kit",
        state: "dispatched",
        receivedTimestamp: "1505310201",
        dispatchedTimestamp: "1605890201"
      })
    ).toEqual(expectedState);
  });
});
