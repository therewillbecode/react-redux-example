import { createSelector } from "reselect";

export const assetsSelector = state => state.get("assets");

export const findAssetById = (assets, searchId) =>
  assets.find(({ id }) => id === searchId);
