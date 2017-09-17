/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { shallow, mount } from "enzyme";

import { ReceiveAssetFormContainer } from "../ReceiveAssetFormContainer";

describe("ReceiveAssetFormContainer", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ReceiveAssetFormContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("should call receiveAsset prop when handleSubmit method with correct args", () => {
    const name = "Foo";
    const comment = "Lorem";
    const wrapper = mount(<ReceiveAssetFormContainer receiveAsset={spy} />);
    wrapper.setState({ name, comment });
    wrapper.instance().handleSubmit();
    expect(spy.firstCall.args).toEqual([name, comment]);
  });

  it("should not call receiveAsset prop when handleSubmit method when required field is empty string", () => {
    const name = "";
    const comment = "Lorem";
    const wrapper = mount(<ReceiveAssetFormContainer receiveAsset={spy} />);
    wrapper.setState({ name, comment });
    wrapper.instance().handleSubmit();
    expect(spy.callCount).toEqual(0);
  });

  it("should set name error when handleSubmit method is called with name as an empty string", () => {
    const name = "";
    const comment = "Lorem";
    const wrapper = mount(<ReceiveAssetFormContainer receiveAsset={spy} />);
    wrapper.setState({ name, comment });
    wrapper.instance().handleSubmit();
    expect(wrapper.state().nameErr).toEqual("Name is a required field");
  });

  it("should setState correctly when onChange method is called", () => {
    const expectedState = { name: "UAV", comment: "", nameErr: null };
    const name = "name";
    const value = "UAV";
    const wrapper = mount(<ReceiveAssetFormContainer />);
    wrapper.instance().onChange({}, { name, value });
    expect(wrapper.state()).toEqual(expectedState);
  });
});
