/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import AssetItem from "../AssetItem";

describe("AssetItem", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetItem />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
