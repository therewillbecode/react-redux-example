import { List } from "immutable";

import * as types from "../actions/types";
import { findAssetById } from "../selectors/index";

const initialState = List([]);

export default function assets(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ASSET: {
      const assetExists = findAssetById(state, action.id) !== undefined;

      return assetExists
        ? state
        : state.push({
            id: action.id,
            name: action.name,
            state: "received",
            receivedTimestamp: action.timestamp,
            dispatchedTimestamp: null,
            comment: action.comment
          });
    }

    case types.DISPATCH_ASSET: {
      return state.update(
        state.findIndex(({ id }) => id === action.id),
        asset => {
          if (asset.state === "dispatched") {
            return asset; // don't update asset if already dispatched
          } else {
            asset.dispatchedTimestamp = action.timestamp;
            asset.state = "dispatched";

            return asset;
          }
        }
      );
    }

    case types.EDIT_ASSET_NAME: {
      return state.update(
        state.findIndex(({ id }) => id === action.id),
        asset => {
          if (asset.state === "dispatched") {
            return asset; // don't edit asset if dispatched
          } else {
            asset.name = action.newName;

            return asset;
          }
        }
      );
    }

    case types.EDIT_ASSET_COMMENT: {
      return state.update(
        state.findIndex(({ id }) => id === action.id),
        asset => {
          if (asset.state === "dispatched") {
            return asset; // don't edit asset if dispatched
          } else {
            asset.comment = action.newComment;

            return asset;
          }
        }
      );
    }

    default:
      return state;
  }
}
