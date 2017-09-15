import React, { Component } from "react";
import { withRouter } from "react-router";
import { Sidebar, Menu, Icon } from "semantic-ui-react";

export class AppHeader extends Component {
  render() {
    const {
      isAuthenticated,
      login,
      logout,
      history,
      downloadInventoryCSV
    } = this.props;

    return (
      <div style={{ height: "5vh" }}>
        <Sidebar.Pushable
          as={Menu}
          direction="top"
          width="thin"
          visible
          borderless
          inverted
          style={{ background: "#085276" }}
        >
          <Menu.Item size="huge">
            <Icon name="barcode" bordered inverted size="big" />
          </Menu.Item>
          <Menu.Item link onClick={() => history.push("/")} name="title">
            <h2>Supply Chain Project</h2>
          </Menu.Item>
          {isAuthenticated ? (
            <Menu.Item
              link
              text
              onClick={() => history.push("/assets")}
              name="assets"
            >
              <h3>Assets</h3>
            </Menu.Item>
          ) : null}
          {!isAuthenticated ? (
            <Menu.Item link position="right" onClick={login} name="Login">
              <Icon name="sign in" />
              Login
            </Menu.Item>
          ) : null}
          {isAuthenticated ? (
            <Menu.Item
              link
              icon
              position="right"
              onClick={() => downloadInventoryCSV()}
              size="big"
              name="Download"
            >
              <Icon name="download" size="large" />
            </Menu.Item>
          ) : null}
          {isAuthenticated ? (
            <Menu.Item link size="huge" onClick={logout} name="Logout">
              <Icon name="sign out" size="large" />
              Logout
            </Menu.Item>
          ) : null}
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default withRouter(AppHeader);
