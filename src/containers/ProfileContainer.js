import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProfile } from "../actions/index.js";

export class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: () => dispatch(fetchProfile())
  };
};

export default connect(undefined, mapDispatchToProps)(ProfileContainer);
