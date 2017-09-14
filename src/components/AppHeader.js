import React, { Component } from "react";
import { withRouter } from "react-router";

import { Sidebar, Menu, Icon } from "semantic-ui-react";

class AppHeader extends Component {
  render() {
    const { isAuthenticated, login, logout, history } = this.props;

    return (
      <div style={{ height: "5vh" }}>
        <Sidebar.Pushable
          as={Menu}
          direction="top"
          width="thin"
          visible
          inverted
        >
          <Menu.Item link onClick={() => history.push("/")} name="title">
            <h1>Supply Chain Project</h1>
          </Menu.Item>
          {isAuthenticated ? (
            <Menu.Item
              link
              onClick={() => history.push("/assets")}
              name="assets"
            >
              <Icon name="barcode" />
              Assets
            </Menu.Item>
          ) : null}
          {!isAuthenticated ? (
            <Menu.Item link position="right" onClick={login} name="Login">
              <Icon name="sign in" />
              Login
            </Menu.Item>
          ) : null}
          {isAuthenticated ? (
            <Menu.Item link position="right" onClick={logout} name="Logout">
              <Icon name="sign out" />
              Logout
            </Menu.Item>
          ) : null}
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withRouter(AppHeader);
