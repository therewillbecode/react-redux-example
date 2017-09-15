/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { AssetItemContainer } from "../AssetItemContainer";

describe("AssetItemContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetItemContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
