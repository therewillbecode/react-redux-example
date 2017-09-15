/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import Assets from "../Assets";

describe("Assets", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<Assets />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
