import React, { Component } from "react";
import { Icon, Image } from "semantic-ui-react";
import containersImg from "./containers.jpg";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Automated Asset Tracking. </h2>

        <img
          src={{
            position: "absolute",
            width: "100vh",
            height: "100vh",
            zIndex: "0"
          }}
          src={containersImg}
        />

        <Icon size="massive" name="cubes" />
      </div>
    );
  }
}

export default App;
