/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import EditAssetForm from "../EditAssetForm";

describe("EditAssetForm", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<EditAssetForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
