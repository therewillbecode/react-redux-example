import { List } from "immutable";

import * as types from "../actions/types";

const inititialState = List([]);

export default function assets(state = inititialState, action) {
  switch (action.type) {
    case types.RECEIVE_ASSET:
      const { id, name, timestamp, comment } = action;
      return state.push({
        id,
        name,
        state: "received",
        receivedTimestamp: timestamp,
        dispatchedTimestamp: null,
        comment
      });

    default:
      return state;
  }
}
