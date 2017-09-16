/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { shallow } from "enzyme";
import { Table } from "semantic-ui-react";

import AssetsList from "../AssetsList";

const assets = [
  {
    id: "kj48",
    name: "pfs",
    status: "dispatched",
    receivedTimestamp: "34245",
    dispatchedTimestamp: "5235",
    comment: "Lorem"
  }
];

describe("AssetsList", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetsList assets={assets} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("navigateToAsset prop should be called with id on row click", () => {
    const assetId = assets[0].id;
    const wrapper = shallow(
      <AssetsList assets={assets} navigateToAsset={spy} />
    );
    wrapper
      .find(Table.Row)
      .last()
      .simulate("click");

    expect(spy.firstCall.args).toEqual([assetId]);
  });
});
