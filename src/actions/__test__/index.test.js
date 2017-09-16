/* eslint-disable */
import * as actions from "../index";
import * as types from "../types";

describe("actions", () => {
  it("should create an action for received asset", () => {
    const id = "gi4uH53s";
    const name = "car";
    const comment = "lorem ipsum";
    const action = actions.receiveAsset(id, name, comment);

    expect(action.type).toEqual(types.RECEIVE_ASSET);
    expect(typeof action.id).toEqual("string");
    expect(typeof action.timestamp).toEqual("number");
  });

  it("should create an action to dispatch asset", () => {
    const id = "gi4uH53s";
    const action = actions.dispatchAsset(id);

    expect(action.type).toEqual(types.DISPATCH_ASSET);
    expect(typeof action.id).toEqual("string");
    expect(typeof action.timestamp).toEqual("number");
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

  it("should create an authSuccess action", () => {
    const expectedAction = {
      type: types.AUTH_SUCCESS
    };

    expect(actions.authSuccess()).toEqual(expectedAction);
  });

  it("should create a loggedOut action", () => {
    const expectedAction = {
      type: types.LOGGED_OUT
    };

    expect(actions.loggedOut()).toEqual(expectedAction);
  });

  describe("requestProfile", () => {
    it("should create a requestProfile action", () => {
      const expectedAction = {
        type: types.REQUEST_PROFILE
      };

      expect(actions.requestProfile()).toEqual(expectedAction);
    });
  });

  describe("receiveProfile", () => {
    it("should create a receiveProfile action", () => {
      const data = { firstName: "Foo", lastName: "Bar" };
      const expectedAction = {
        type: types.RECEIVE_PROFILE,
        data
      };

      expect(actions.receiveProfile(data)).toEqual(expectedAction);
    });
  });

  describe("requestProfileErr", () => {
    it("should create a requestProfileErr action", () => {
      const err = "404";
      const expectedAction = {
        type: types.REQUEST_PROFILE_ERR,
        err
      };

      expect(actions.requestProfileErr(err)).toEqual(expectedAction);
    });
  });

  describe("fetchProfile", () => {
    it("should ...", () => {});
  });
});
