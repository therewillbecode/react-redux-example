import React from "react";

import EditAssetFormContainer from "../containers/EditAssetFormContainer";

const AssetItem = ({ asset }) => (
  <div>
    <EditAssetFormContainer asset={asset} />
  </div>
);

export default AssetItem;
