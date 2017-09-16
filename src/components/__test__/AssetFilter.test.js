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

  it("should call handleSubmit when form is submitted", () => {
    const filterStatus = "received";
    const wrapper = shallow(<AssetFilter handleChange={spy} />);
    wrapper
      .find(Dropdown)
      .simulate("change", { target: { value: filterStatus } });
    expect(spy.firstCall).toEqual(filterStatus);
  });
});
