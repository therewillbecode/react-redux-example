/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { shallow, mount } from "enzyme";

import { EditAssetFormContainer } from "../EditAssetFormContainer";

const asset = {
  id: "kj48",
  name: "UAV",
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

describe("Calls handler props", () => {
  let spy = null;

  beforeEach(() => {
    spy = new sinon.spy();
  });

  it("should call editAssetName prop when handleSubmit method is called with correct args", () => {
    const newName = "Foo";
    const wrapper = mount(
      <EditAssetFormContainer
        asset={asset}
        editAssetName={spy}
        editAssetComment={() => null}
      />
    );
    wrapper.setState({ name: newName });
    wrapper.instance().handleSubmit();
    expect(spy.firstCall.args[0]).toBe(newName);
  });

  it("should call editAssetComment prop when handleSubmit method is called with correct args", () => {
    const newComment = "Bar";
    const wrapper = mount(
      <EditAssetFormContainer
        asset={asset}
        editAssetName={() => null}
        editAssetComment={spy}
      />
    );
    wrapper.setState({ comment: newComment });
    wrapper.instance().handleSubmit();
    expect(spy.firstCall.args[0]).toBe(newComment);
  });

  it("should not call editAssetName prop in handleSubmit method when name is empty string", () => {
    const newName = "";
    const wrapper = mount(
      <EditAssetFormContainer
        asset={asset}
        editAssetName={() => null}
        editAssetComment={spy}
      />
    );
    wrapper.setState({ name: newName });
    wrapper.instance().handleSubmit();
    expect(spy.callCount).toEqual(0);
  });

  it("should setState correctly when onChange method is called", () => {
    const expectedState = { name: "UAV", comment: "Bar" };
    const key = "comment";
    const value = "Bar";
    const wrapper = mount(
      <EditAssetFormContainer
        asset={asset}
        editAssetName={() => null}
        editAssetComment={() => null}
      />
    );
    wrapper.instance().onChange({}, { key, value });
    expect(wrapper.state()).toEqual(expectedState);
  });

  it("Should set asset id and name to state on mount", () => {
    const expectedState = { name: asset.name, comment: asset.comment };
    const wrapper = mount(<EditAssetFormContainer asset={asset} />);
    expect(wrapper.state()).toEqual(expectedState);
  });
});
