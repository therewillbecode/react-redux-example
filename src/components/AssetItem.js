import React, { Component } from "react";

const AssetItem = ({ asset }) => (
  <div>
    <h3>{asset.id}</h3>
    {asset.name}
  </div>
);

export default AssetItem;
