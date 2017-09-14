import * as types from "./types";

export function receiveAsset(id, name, timestamp, comment) {
  return {
    type: types.RECEIVE_ASSET,
    id,
    name,
    timestamp,
    comment
  };
}

export function dispatchAsset(id, timestamp) {
  return {
    type: types.DISPATCH_ASSET,
    id,
    timestamp
  };
}

export function editAssetName(id, newName) {
  return {
    type: types.EDIT_ASSET_NAME,
    id,
    newName
  };
}

export function editAssetComment(id, newComment) {
  return {
    type: types.EDIT_ASSET_COMMENT,
    id,
    newComment
  };
}

export function authSuccess(idToken) {
  return {
    type: types.AUTH_SUCCESS,
    idToken
  };
}

export function loggedOut() {
  return {
    type: types.LOGGED_OUT
  };
}
