import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import { fetchProfile } from "../actions/index.js";

export class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    if (!this.props.profile) {
      this.props.fetchProfile(accessToken);
    }
  }

  render() {
    const { profile } = this.props;

    return profile ? (
      <Profile profile={profile} />
    ) : (
      <img src="img/loading.svg" alt="loading" />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.get("auth").get("profile")
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProfile: token => dispatch(fetchProfile(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
