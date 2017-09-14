import React from "react";
import { connect } from "react-redux";

import Assets from "../components/Assets";

export const AssetsContainer = ({ assets }) => <Assets assets={assets} />;

const mapStateToProps = state => {
  return {
    assets: state.assets
  };
};

export default connect(mapStateToProps)(AssetsContainer);
