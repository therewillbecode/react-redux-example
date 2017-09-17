/* eslint-disable */
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import sinon from "sinon";
import { mount } from "enzyme";

import { ProfileContainer } from "../ProfileContainer";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

const profile = {
  name: "Foo Bar",
  given_name: "Foo",
  family_name: "Bar",
  nickname: "Foobar",
  picture: "/photo.jpg"
};

describe("ProfileContainer", () => {
  it("renders loading icon if no profile data present", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ProfileContainer />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it("renders profile if data present", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ProfileContainer profile={profile} />);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  describe("fetchProfile", () => {
    let spy = null;

    beforeEach(() => {
      spy = new sinon.spy();
      global.localStorage = new LocalStorageMock();
      global.localStorage.setItem("access_token", "k");
    });

    it("is called in componentDidMount if there is no profile data", () => {
      const wrapper = mount(<ProfileContainer fetchProfile={spy} />);

      expect(spy.calledOnce).toBe(true);
    });

    it("is not called in componentDidMount if there is profile data", () => {
      const wrapper = mount(
        <ProfileContainer fetchProfile={spy} profile={profile} />
      );
      expect(spy.calledOnce).toBe(false);
    });
  });
});
