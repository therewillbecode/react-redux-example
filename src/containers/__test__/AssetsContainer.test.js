/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { AssetsContainer } from "../AssetsContainer";

describe("AssetsContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
