/* eslint-disable */
import { List, fromJS } from "immutable";

import reducer from "../assets";
import * as actions from "../../actions/index";

describe("assets reducer", () => {
  it("should return the initial state", () => {
    const expectedState = List([]);
    const initialState = undefined;

    expect(reducer(initialState, {})).toEqual(expectedState);
  });

  describe.only("when receiving assets", () => {
    it("should handle the receiving of assets", () => {
      const name = "drone";
      const id = "h28S97Sn3";
      const comment = "aerial kit";
      const state = "received";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = null;
      const initialState = List([]);
      const expectedState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(
        reducer(
          initialState,
          actions.receiveAsset(id, name, receivedTimestamp, comment)
        )
      ).toEqual(expectedState);
    });

    it("timestamp should not change if already received asset is received again", () => {
      const name = "drone";
      const id = "h28S97Sn3";
      const comment = "aerial kit";
      const state = "receive";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = "1605890201";
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(reducer(initialState, actions.receiveAsset(id, "999"))).toEqual(
        initialState
      );
    });
  });

  describe("when dispatching assets", () => {
    it("should handle the dispatching of received assets", () => {
      const name = "drone";
      const id = "h28S97Sn3";
      const comment = "aerial kit";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = "1605890201";
      const initialState = List([
        {
          name,
          id,
          comment,
          state: "received",
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);
      const expectedState = List([
        {
          name,
          id,
          comment,
          state: "dispatched",
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(
        reducer(initialState, actions.dispatchAsset(id, dispatchedTimestamp))
      ).toEqual(expectedState);
    });

    it("timestamp should not change if already dispatched asset is dispatched again", () => {
      const name = "drone";
      const id = "h28S97Sn3";
      const comment = "aerial kit";
      const state = "dispatched";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = "1605890201";
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(reducer(initialState, actions.dispatchAsset(id, "999"))).toEqual(
        initialState
      );
    });
  });

  describe("when editing assets", () => {
    it("should handle name edits for received assets", () => {
      const id = "h28S97Sn3";
      const name = "drone";
      const newName = "uav";
      const comment = "aerial kit";
      const state = "received";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = null;
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);
      const expectedState = List([
        {
          name: newName,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(reducer(initialState, actions.editAssetName(id, newName))).toEqual(
        expectedState
      );
    });

    it("should handle comment edits for received assets", () => {
      const id = "h28S97Sn3";
      const name = "drone";
      const comment = "aerial kit";
      const newComment = "aerial kit for data collection";
      const state = "received";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = null;
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);
      const expectedState = List([
        {
          name,
          id,
          comment: newComment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(
        reducer(initialState, actions.editAssetComment(id, newComment))
      ).toEqual(expectedState);
    });

    it("should not allow editing of dispatched asset comments", () => {
      const id = "h28S97Sn3";
      const name = "drone";
      const comment = "aerial kit";
      const newComment = "aerial kit for data collection";
      const state = "dispatched";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = null;
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);
      const expectedState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(
        reducer(initialState, actions.editAssetComment(id, newComment))
      ).toEqual(expectedState);
    });

    it("should not allow editing of dispatched asset names", () => {
      const id = "h28S97Sn3";
      const name = "drone";
      const newName = "uav";
      const comment = "aerial kit";
      const newComment = "aerial kit for data collection";
      const state = "dispatched";
      const receivedTimestamp = "1505310201";
      const dispatchedTimestamp = null;
      const initialState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);
      const expectedState = List([
        {
          name,
          id,
          comment,
          state,
          receivedTimestamp,
          dispatchedTimestamp
        }
      ]);

      expect(reducer(initialState, actions.editAssetName(id, newName))).toEqual(
        expectedState
      );
    });
  });
});
