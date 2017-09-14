import React, { Component } from "react";
import { connect } from "react-redux";

import AssetsList from "../components/AssetsList";

class AssetsListContainer extends Component {
  render() {
    const { assets } = this.props;

    return <AssetsList assets={assets} />;
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default connect(mapStateToProps)(AssetsListContainer);
