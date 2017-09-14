import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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
    const { isAuthenticated, login, logout, history } = this.props;

    return (
      <Sidebar as={Menu} direction="top" visible inverted>
        <Menu.Item link onClick={() => history.push("/")} name="title">
          <h1>Supply Chain Project</h1>
        </Menu.Item>
        {isAuthenticated ? (
          <Menu.Item link onClick={() => history.push("/assets")} name="assets">
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
      </Sidebar>
    );
  }
}

export default withRouter(AppHeader);
