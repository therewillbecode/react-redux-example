/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { shallow, mount } from "enzyme";
import { Form } from "semantic-ui-react";

import ReceiveAssetForm from "../ReceiveAssetForm";

describe("ReceiveAssetForm", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ReceiveAssetForm />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("Input should call onChange handler with correct args", () => {
    const expectedValue = { name: "name", value: "Foo" };
    const wrapper = shallow(<ReceiveAssetForm onChange={spy} />);
    wrapper.find(Form.Input).simulate("change", { target: expectedValue });
    const { target } = spy.firstCall.args[0];

    expect(target).toEqual(expectedValue);
  });

  it("TextArea should call onChange handler with correct args", () => {
    const expectedValue = { name: "comment", value: "Lorem Ipsum" };
    const wrapper = shallow(<ReceiveAssetForm onChange={spy} />);
    wrapper.find(Form.TextArea).simulate("change", { target: expectedValue });
    const { target } = spy.firstCall.args[0];

    expect(target).toEqual(expectedValue);
  });

  it("should call handleSubmit when form is submitted", () => {
    const wrapper = shallow(<ReceiveAssetForm handleSubmit={spy} />);
    wrapper.find(Form).simulate("submit");
    expect(spy.calledOnce).toBe(true);
  });
});
