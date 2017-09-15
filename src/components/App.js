import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import containersImg from "./containers.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Automated Asset Tracking. </h2>
        <img
          style={{
            position: "absolute",
            width: "100vw",
            zIndex: "0"
          }}
          alt="containers"
          src={containersImg}
        />
        <Icon size="massive" name="cubes" />
      </div>
    );
  }
}

export default App;
