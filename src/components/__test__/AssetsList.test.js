/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import AssetsList from "../AssetsList";

const assets = [
  {
    id: "kj48",
    name: "pfs",
    status: "dispatched",
    receivedTimestamp: "34245",
    dispatchedTimestamp: "5235",
    comment: "Lorem"
  }
];

describe("AssetsList", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetsList assets={assets} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
