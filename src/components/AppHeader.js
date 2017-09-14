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
        <Menu.Item name="home">
          <Icon name="home" />
          <Link to="/">Home</Link>
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Item name="assets">
            <Icon name="barcode" />
            <Link to="/assets">Assets</Link>
          </Menu.Item>
        ) : null}
        {!isAuthenticated ? (
          <Menu.Item onClick={login} name="Login">
            <Icon name="sign in" />
            Login
          </Menu.Item>
        ) : null}
        {isAuthenticated ? (
          <Menu.Item onClick={logout} name="Logout">
            <Icon name="sign out" />
            Logout
          </Menu.Item>
        ) : null}
      </Sidebar>
    );
  }
}

export default AppHeader;
