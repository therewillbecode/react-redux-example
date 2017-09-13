import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    const { isAuthenticated, auth } = this.props;

    return (
      <div>
        <Link to="/home">Home</Link>
        {!isAuthenticated ? <button onClick={auth.login}>Log In</button> : null}
        {isAuthenticated ? (
          <div>
            <button onClick={auth.logout}>Log Out</button>
            <Link to="/assets">Assets</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AppHeader;
