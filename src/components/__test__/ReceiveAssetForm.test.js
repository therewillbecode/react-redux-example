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

  it("should call handleSubmit when form is submitted", () => {
    const wrapper = shallow(<ReceiveAssetForm handleSubmit={spy} />);
    wrapper.find(Form).simulate("submit");
    expect(spy.calledOnce).toBe(true);
  });
});
