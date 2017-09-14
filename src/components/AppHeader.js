import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from "semantic-ui-react";

class AppHeader extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props;

    return (
      <Sidebar as={Menu} direction="top" visible inverted>
        <Menu.Item link name="title">
          <Link to="/">
            {" "}
            <h1>Supply Chain Project</h1>
          </Link>
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Item link name="assets">
            <Link to="/assets">
              <Icon name="barcode" />
              Assets
            </Link>
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
      </Sidebar>
    );
  }
}

export default AppHeader;
