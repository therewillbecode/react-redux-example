import { createSelector } from "reselect";

export const assetsSelector = state => state.assets;

export const authSelector = state => state.auth;

export const findAssetById = (state, searchId) =>
  state.assets.find(({ id }) => id === searchId);

export const filterAssetsByState = (assets, filter) => {
  switch (filter) {
    case "received":
      return assets.filter(({ state }) => state === "received");
    case "dispatched":
      return assets.filter(({ state }) => state === "dispatched");

    default:
      return assets;
  }
};

export const isAuthenticated = state =>
  authSelector(state).get("isAuthenticated");
