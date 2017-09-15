/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import ReceiveAssetForm from "../ReceiveAssetForm";

describe("ReceiveAssetForm", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<ReceiveAssetForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
