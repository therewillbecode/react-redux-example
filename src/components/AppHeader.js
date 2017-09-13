import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props;

    return (
      <div>
        <Link to="/">Home</Link>
        {!isAuthenticated ? <button onClick={login}>Log In</button> : null}
        {isAuthenticated ? (
          <div>
            <button onClick={logout}>Log Out</button>
            <Link to="/assets">Assets</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AppHeader;
