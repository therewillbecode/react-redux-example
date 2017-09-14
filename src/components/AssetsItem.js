import React, { Component } from "react";

class AssetsItem extends Component {
  render() {
    const { id } = this.props;

    return (
      <div>
        <h3>{id}</h3>
      </div>
    );
  }
}

export default AssetsItem;
