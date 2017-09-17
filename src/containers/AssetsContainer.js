import React from "react";
import { connect } from "react-redux";

import Assets from "../components/Assets";

export const AssetsContainer = ({ assets }) => <Assets assets={assets} />;

const mapStateToProps = state => ({ assets: state.get("assets") });

export default connect(mapStateToProps)(AssetsContainer);
