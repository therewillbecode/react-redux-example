import React, { Component } from "react";
import AssetsItem from "../components/AssetsItem";

class AssetItemContainer extends Component {
  render() {
    const { id } = this.props.match.params;

    return <AssetsItem id={id} />;
  }
}

export default AssetItemContainer;
