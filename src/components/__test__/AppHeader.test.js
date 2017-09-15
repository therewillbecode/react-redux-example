/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { AppHeader } from "../AppHeader";

describe("AppHeader", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AppHeader />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
