import React from "react";

import AssetsListContainer from "../containers/AssetsListContainer";
import ReceiveAssetFormContainer from "../containers/ReceiveAssetFormContainer";

const Assets = props => (
  <div>
    <h2>Assets</h2>
    <ReceiveAssetFormContainer />
    <AssetsListContainer />
  </div>
);

export default Assets;
