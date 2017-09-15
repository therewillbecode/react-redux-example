/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import Loading from "../Loading";

describe("Loading", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Loading />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
