/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import AssetFilter from "../AssetFilter";

describe("AssetFilter", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetFilter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
