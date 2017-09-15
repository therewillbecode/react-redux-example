export const assetsSelector = state => state.assets;

export const authSelector = state => state.auth;

export const findAssetById = (assets, searchId) =>
  assets.find(({ id }) => id === searchId);

export const filterAssetsByStatus = (assets, status) =>
  status === "all" ? assets : assets.filter(a => a.status === status);

export const filterAssetsBySubstring = (assets, key, substring) =>
  substring ? assets.filter(a => a[key].includes(substring)) : assets;

export const isAuthenticated = state =>
  authSelector(state).get("isAuthenticated");
