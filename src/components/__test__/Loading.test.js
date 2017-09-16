/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { mount } from "enzyme";

import Loading from "../Loading";

describe("Loading", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Loading />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("should call handleAuthentication prop on mount", () => {
    const wrapper = mount(<Loading handleAuthentication={spy} />);
    expect(spy.calledOnce).toBe(true);
  });
});
