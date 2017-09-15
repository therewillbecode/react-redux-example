/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import Assets from "../Assets";

describe("Assets", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Assets />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
