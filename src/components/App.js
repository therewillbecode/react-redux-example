import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";
import containersImg from "./containers.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            background: "rgba(8,82,118, 0.95)", // #085276
            zIndex: "100",
            color: "white",
            position: "absolute",
            left: "32vw",
            top: "30%",
            paddingLeft: "4vw",
            paddingRight: "4vw",
            paddingTop: "4vh",
            paddingBottom: "4vh",
            borderRadius: "20px",
            textAlign: "center"
          }}
        >
          <Icon bordered inverted size="massive" color="black" name="barcode" />
          <div style={{ marginTop: "1.75em" }}>
            <h1>Supply Chain Project</h1>
            <h2>Automated Asset Tracking for Your Organisation</h2>
          </div>
          <Button
            style={{ marginTop: "1.75em" }}
            secondary
            size="massive"
            content="Get Started"
          />
        </div>
        <img
          style={{
            position: "relative",
            width: "100vw",
            left: "0",
            top: "0"
          }}
          alt="containers"
          src={containersImg}
        />
      </div>
    );
  }
}

export default App;
