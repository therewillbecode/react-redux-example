import React from "react";
import { Icon, Button } from "semantic-ui-react";
import background from "./background.png";

const App = ({ login }) => (
  <div>
    <div
      style={{
        background: "rgba(8,82,118, 0.95)", // #085276
        zIndex: "100",
        color: "white",
        position: "absolute",
        left: "25%",
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
        <h1>Example App</h1>
        <h2>React - Redux - Immutable - React-Router - OAuth - Jest</h2>
      </div>
      <Button
        style={{ marginTop: "1.75em" }}
        secondary
        size="massive"
        content="Get Started"
        onClick={login}
      />
    </div>
    <img
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        left: "0",
        top: "0"
      }}
      alt="background"
      src={background}
    />
  </div>
);

export default App;
