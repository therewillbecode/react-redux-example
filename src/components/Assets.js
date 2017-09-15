import React from "react";

import AssetsListContainer from "../containers/AssetsListContainer";
import ReceiveAssetFormContainer from "../containers/ReceiveAssetFormContainer";

const Assets = () => (
  <div>
    <ReceiveAssetFormContainer />
    <AssetsListContainer />
  </div>
);

export default Assets;
