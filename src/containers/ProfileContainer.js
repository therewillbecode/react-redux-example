import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchProfile } from "../actions/index.js";

export class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    this.props.fetchProfile(accessToken);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({ profile: state.getIn("profile")[0] });

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: token => dispatch(fetchProfile(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
