/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import AssetFilter from "../AssetFilter";

describe("AssetItem", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetFilter />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
