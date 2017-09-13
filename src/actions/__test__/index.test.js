/* eslint-disable */
import * as actions from "../index";
import * as types from "../types";

describe("actions", () => {
  it("should create an action for received asset", () => {
    const id = "gi4uH53s";
    const name = "car";
    const timestamp = "1505310201";
    const comment = "off road";
    const expectedAction = {
      type: types.RECEIVE_ASSET,
      id,
      name,
      timestamp,
      comment,
      state: "received"
    };

    expect(actions.receiveAsset(id, name, timestamp, comment)).toEqual(
      expectedAction
    );
  });

  it("should create an action to dispatch asset", () => {
    const id = "gi4uH53s";

    const expectedAction = {
      type: types.DISPATCH_ASSET,
      id
    };

    expect(actions.dispatchAsset(id)).toEqual(expectedAction);
  });

  it("should create an action to edit asset name", () => {
    const id = "gi4uH53s";
    const newName = "truck";

    const expectedAction = {
      type: types.EDIT_ASSET_NAME,
      id,
      newName
    };

    expect(actions.editAssetName(id, newName)).toEqual(expectedAction);
  });

  it("should create an action to edit asset comment", () => {
    const id = "gi4uH53s";
    const newComment = "on road";

    const expectedAction = {
      type: types.EDIT_ASSET_COMMENT,
      id,
      newComment
    };

    expect(actions.editAssetComment(id, newComment)).toEqual(expectedAction);
  });
});
