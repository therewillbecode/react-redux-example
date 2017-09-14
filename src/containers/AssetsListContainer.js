import React, { PureComponent } from "react";
import { connect } from "react-redux";

import AssetsList from "../components/AssetsList";

class AssetsListContainer extends PureComponent {
  render() {
    const { assets } = this.props;

    return <AssetsList assets={assets} />;
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default connect(mapStateToProps)(AssetsListContainer);
