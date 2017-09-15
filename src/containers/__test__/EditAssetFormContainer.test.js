/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { EditAssetFormContainer } from "../EditAssetFormContainer";

describe("EditAssetFormContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<EditAssetFormContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
