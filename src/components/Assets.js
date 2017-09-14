import React, { Component } from "react";

import AssetsListContainer from "../containers/AssetsListContainer";

class Assets extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to the Assets page</h2>
        <AssetsListContainer />
      </div>
    );
  }
}

export default Assets;
