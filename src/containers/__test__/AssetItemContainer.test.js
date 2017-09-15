/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { AssetItemContainer } from "../AssetItemContainer";

describe("AssetItemContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetItemContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
