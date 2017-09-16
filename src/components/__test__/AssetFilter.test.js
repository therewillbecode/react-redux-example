/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import sinon from "sinon";
import { Dropdown, Input } from "semantic-ui-react";

import AssetFilter from "../AssetFilter";

describe("AssetItem", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<AssetFilter />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("should call handleChange prop when filter is changed", () => {
    const filterStatus = "received";
    const expectedArg = { target: { value: filterStatus } };
    const wrapper = shallow(<AssetFilter handleChange={spy} />);
    wrapper.find(Dropdown).simulate("change", expectedArg);
    expect(spy.firstCall.args[0]).toEqual(expectedArg);
  });

  it("should call updateSearchQuery prop with search query", () => {
    const searchQuery = "Foo";
    const expectedArg = { target: { value: searchQuery } };
    const wrapper = shallow(<AssetFilter updateSearchQuery={spy} />);
    wrapper.find(Input).simulate("change", expectedArg);
    expect(spy.firstCall.args[0]).toEqual(expectedArg);
  });
});
