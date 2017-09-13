import { createSelector } from "reselect";

export const assetsSelector = state => state.get("assets");

export const authSelector = state => state.get("auth");

export const findAssetById = (assets, searchId) =>
  assets.find(({ id }) => id === searchId);

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

export const isAuthenticated = auth =>
  authSelector(auth).get("isAuthenticated");
