import * as types from "./types";

export function receiveAsset(id, name, timestamp, comment) {
  return {
    type: types.RECEIVE_ASSET,
    id,
    name,
    timestamp,
    comment,
    state: "received"
  };
}

export function dispatchAsset(id) {
  return {
    type: types.DISPATCH_ASSET,
    id
  };
}

export function editAsset(id, newName) {
  return {
    type: types.EDIT_ASSET,
    id,
    newName
  };
}
