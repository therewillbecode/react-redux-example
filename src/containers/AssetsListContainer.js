import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AssetsList from "../components/AssetsList";

class AssetsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.navigateToAsset = this.navigateToAsset.bind(this);
  }

  navigateToAsset(id) {
    this.props.history.push(`/asset/${id}`);
  }

  render() {
    const { assets } = this.props;

    return (
      <AssetsList assets={assets} navigateToAsset={this.navigateToAsset} />
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default withRouter(connect(mapStateToProps)(AssetsListContainer));
