/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import AssetItem from "../AssetItem";

describe("AssetItem", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
