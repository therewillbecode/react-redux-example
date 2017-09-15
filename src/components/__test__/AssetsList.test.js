/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import AssetsList from "../AssetsList";

describe("AssetsList", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetsList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
