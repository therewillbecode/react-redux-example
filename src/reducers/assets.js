import { List } from "immutable";

import * as types from "../actions/types";
import { findAssetById } from "../selectors/index";

const initialState = List([
  {
    id: "cj7knowho0001345ohhh5o1iu",
    name: "Drone",
    status: "received",
    receivedTimestamp: "1505407334259",
    dispatchedTimestamp: null,
    comment: "lorem ismif  dse actioomment"
  },
  {
    id: "cj7knoykr000a345o8e5sm6d0",
    name: "Car",
    status: "received",
    receivedTimestamp: "1505407634241",
    dispatchedTimestamp: null,
    comment: "d ismif  gactioomment"
  },
  {
    id: "cj7knpraq000i345obr97w9hw",
    name: "3D Printer",
    status: "received",
    receivedTimestamp: "1605407345244",
    dispatchedTimestamp: null,
    comment: "lorem ffg  dse actioomment"
  }
]);

export default function assets(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_ASSET: {
      const assetExists = findAssetById(state, action.id) !== undefined;

      if (action.name === undefined || action.name === null) {
        return state;
      } else {
        return assetExists
          ? state
          : state.push({
              id: action.id,
              name: action.name,
              status: "received",
              receivedTimestamp: action.timestamp,
              dispatchedTimestamp: null,
              comment: action.comment
            });
      }
    }

    case types.DISPATCH_ASSET: {
      return state.update(
        state.findIndex(({ id }) => id === action.id),
        asset => {
          if (asset.state === "dispatched") {
            return asset; // don't update asset if already dispatched
          } else {
            asset.dispatchedTimestamp = action.timestamp;
            asset.status = "dispatched";

            return asset;
          }
        }
      );
    }

    case types.EDIT_ASSET_NAME: {
      return state.update(
        state.findIndex(({ id }) => id === action.id),
        asset => {
          if (asset.status === "dispatched") {
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
          asset.comment = action.newComment;
          return asset;
        }
      );
    }

    default:
      return state;
  }
}
