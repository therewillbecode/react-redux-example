/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { shallow, mount } from "enzyme";

import { AssetsListContainer } from "../AssetsListContainer";
const assets = [
  {
    id: "kj48",
    name: "UAV",
    status: "dispatched",
    receivedTimestamp: "34245",
    dispatchedTimestamp: "5235",
    comment: "Lorem"
  }
];

describe("AssetsListContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetsListContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("should navigate to correct route when navigateToAsset method is called", () => {
    const newStatusFilter = "dispatched";
    const id = "001";
    const history = { push: spy };
    const wrapper = mount(
      <AssetsListContainer assets={assets} history={history} />
    );
    wrapper.instance().navigateToAsset(id);
    expect(spy.firstCall.args).toEqual(["/asset/001"]);
  });

  it("should update state with new search query when updateSearchQuery method is called", () => {
    const newSearchQuery = "Foo";
    const wrapper = mount(<AssetsListContainer assets={assets} />);
    wrapper.instance().updateSearchQuery({}, { value: newSearchQuery });
    expect(wrapper.state().searchQuery).toEqual(newSearchQuery);
  });

  it("should update state with new status filter when updateStatusFilter method is called", () => {
    const newStatusFilter = "dispatched";
    const wrapper = mount(<AssetsListContainer assets={assets} />);
    wrapper.instance().updateStatusFilter({}, { value: newStatusFilter });
    expect(wrapper.state().statusFilter).toEqual(newStatusFilter);
  });
});
