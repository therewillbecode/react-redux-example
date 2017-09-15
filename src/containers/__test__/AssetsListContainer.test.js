/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { AssetsListContainer } from "../AssetsListContainer";

describe("AssetsListContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetsListContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
