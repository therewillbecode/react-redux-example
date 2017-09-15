import * as types from "./types";
import cuid from "cuid";

export function receiveAsset(name, comment) {
  return {
    type: types.RECEIVE_ASSET,
    id: cuid(),
    name,
    timestamp: Date.now(),
    comment
  };
}

export function dispatchAsset(id) {
  return {
    type: types.DISPATCH_ASSET,
    id,
    timestamp: Date.now()
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
