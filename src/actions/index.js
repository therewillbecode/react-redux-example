import cuid from "cuid";
import * as types from "./types";

export const receiveAsset = (name, comment) => ({
  type: types.RECEIVE_ASSET,
  id: cuid(),
  name,
  timestamp: Date.now(),
  comment
});

export const dispatchAsset = id => ({
  type: types.DISPATCH_ASSET,
  id,
  timestamp: Date.now()
});

export const editAssetName = (id, newName) => ({
  type: types.EDIT_ASSET_NAME,
  id,
  newName
});

export const editAssetComment = (id, newComment) => ({
  type: types.EDIT_ASSET_COMMENT,
  id,
  newComment
});

export const authSuccess = idToken => ({
  type: types.AUTH_SUCCESS,
  idToken
});

export const loggedOut = () => ({
  type: types.LOGGED_OUT
});
