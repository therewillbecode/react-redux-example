import React, { Component } from "react";

class Loading extends Component {
  componentDidMount() {
    this.props.handleAuthentication();
  }

  render() {
    const style = {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      height: "100vh",
      width: "100vw",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "white"
    };

    return (
      <div style={style}>
        <h1>Authenticating ... </h1>
        <img src="img/loading.svg" alt="loading" />
      </div>
    );
  }
}

export default Loading;
