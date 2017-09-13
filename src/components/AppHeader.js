import React, { Component } from "react";
import { Link } from "react-router-dom";

class AppHeader extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div>
        <button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, "home")}
        >
          Home
        </button>
        {!isAuthenticated ? (
          <button bsStyle="primary" className="btn-margin" onClick={login}>
            Log In
          </button>
        ) : null}
        {isAuthenticated ? (
          <div>
            <button bsStyle="primary" className="btn-margin" onClick={logout}>
              Log Out
            </button>
            <Link to="/assets">Assets</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default AppHeader;
