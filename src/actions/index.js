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
