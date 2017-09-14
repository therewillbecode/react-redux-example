export const assetsSelector = state => state.assets;

export const authSelector = state => state.auth;

export const findAssetById = (assets, searchId) =>
  assets.find(({ id }) => id === searchId);

export const filterAssets = (assets, predicate) => assets.filter(predicate);

export const isAuthenticated = state =>
  authSelector(state).get("isAuthenticated");
