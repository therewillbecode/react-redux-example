import React, { Component } from "react";
import { connect } from "react-redux";

import Profile from "../components/Profile";
import { fetchProfile } from "../actions/index.js";

export class ProfileContainer extends Component {
  componentDidMount() {
    const { profile } = this.props;
    let token = localStorage.getItem("access_token");

    if (!profile && token) {
      this.props.fetchProfile(token);
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
