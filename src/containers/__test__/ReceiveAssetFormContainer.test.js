/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { ReceiveAssetFormContainer } from "../ReceiveAssetFormContainer";

describe("ReceiveAssetFormContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ReceiveAssetFormContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
