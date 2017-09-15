/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import AppHeader from "../AppHeader";

describe("AppHeader", () => {
  beforeEach(() => {});
  it("renders correctly", () => {
    const tree = renderer.create(<AppHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
