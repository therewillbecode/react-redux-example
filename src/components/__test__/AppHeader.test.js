/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { AppHeader } from "../AppHeader";

describe("AppHeader", () => {
  it("renders correctly when user is authenticated", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AppHeader isAuthenticated={true} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when user is not authenticated", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AppHeader isAuthenticated={false} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
