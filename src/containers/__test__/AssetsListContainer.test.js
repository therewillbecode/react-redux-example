/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { AssetsListContainer } from "../AssetsListContainer";

describe("AssetsListContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AssetsListContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
