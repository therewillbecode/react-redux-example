import React, { PureComponent } from "react";
import { connect } from "react-redux";

import AssetItem from "../components/AssetItem";
import { findAssetById } from "../selectors/index";

export class AssetItemContainer extends PureComponent {
  render() {
    const { asset } = this.props;
    return <AssetItem asset={asset} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  asset: findAssetById(state.assets, ownProps.match.params.id)
});

export default connect(mapStateToProps)(AssetItemContainer);
