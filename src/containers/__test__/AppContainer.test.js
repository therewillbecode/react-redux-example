/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import { AppContainer } from "../AppContainer";

describe("AppContainer", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
