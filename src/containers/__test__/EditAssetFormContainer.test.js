/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import { EditAssetFormContainer } from "../EditAssetFormContainer";

const asset = {
  id: "kj48",
  name: "pfs",
  status: "dispatched",
  receivedTimestamp: "34245",
  dispatchedTimestamp: "5235",
  comment: "Lorem"
};

describe("EditAssetFormContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<EditAssetFormContainer asset={asset} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
