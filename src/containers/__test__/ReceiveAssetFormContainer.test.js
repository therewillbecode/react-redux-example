/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { ReceiveAssetFormContainer } from "../ReceiveAssetFormContainer";

describe("ReceiveAssetFormContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<ReceiveAssetFormContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
