/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { EditAssetFormContainer } from "../EditAssetFormContainer";

describe("EditAssetFormContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<EditAssetFormContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
