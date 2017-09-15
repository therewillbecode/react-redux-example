/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import AssetsList from "../AssetsList";

describe("AssetsList", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetsList />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
