/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";

import Profile from "../Profile";

const profile = {
  name: "Foo Bar",
  given_name: "Foo",
  family_name: "Bar",
  nickname: "Foobar",
  picture: "/photo.jpg"
};

describe("Profile", () => {
  it("renders correctly", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Profile profile={profile} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
