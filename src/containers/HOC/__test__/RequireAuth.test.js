/* eslint-disable */

import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import createHistory from "history/createBrowserHistory";
import { fromJS } from "immutable";

import RequireAuth, { AuthenticatedComponent } from "../RequireAuth";

const Component = () => <div />;
Component.displayName = "CustomComponent";
const mockStore = configureStore([]);

describe("RequireAuth", () => {
  const RequireAuthComponent = RequireAuth(Component);
  const initialState = { auth: fromJS({ isAuthenticated: true }) };
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <RequireAuthComponent />
      </Provider>
    );
  });

  it("should return a component", () => {
    expect(wrapper.find("AuthenticatedComponent")).toHaveLength(1);
  });

  it("should pass correct props", () => {
    const tree = renderer.create(<wrapper />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("rendering", () => {
  let history = null;

  describe("is authenticated", () => {
    history = createHistory();
    const wrapper = shallow(
      <AuthenticatedComponent
        composedComponent={Component}
        authenticated
        history={history}
      />
    );

    it("should render the passed component", () => {
      expect(wrapper.find("CustomComponent")).toHaveLength(1);
    });
  });

  describe("is not authenticated", () => {
    const wrapper = shallow(
      <AuthenticatedComponent
        composedComponent={Component}
        authenticated={false}
        history={history}
      />
    );

    it("should not render the passed component", () => {
      expect(wrapper.find("CustomComponent")).toHaveLength(0);
    });
  });
});
