import React, { Component } from "react";
import { Icon, Button } from "semantic-ui-react";
import containersImg from "./containers.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            background: "rgba(8,82,118, 0.75)", // #085276
            zIndex: "100",
            color: "white",
            position: "absolute",
            left: "30vw",
            top: "30vh",
            padding: "5em",
            borderRadius: "20px",

            textAlign: "center"
          }}
        >
          <Icon bordered inverted size="massive" color="black" name="barcode" />
          <h1>Supply Chain Project</h1>
          <h2>Automated Asset Tracking for your organisation</h2>
          <Button
            style={{ marginTop: "1.75em" }}
            secondary
            size="huge"
            content="Get Started"
          />
        </div>
        <img
          style={{
            position: "relative",
            width: "100%",
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
