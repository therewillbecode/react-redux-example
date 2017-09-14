import React, { Component } from "react";
import { connect } from "react-redux";

export class AuthenticatedComponent extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.replace("/");
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated) {
      this.props.history.replace("/");
    }
  }

  render() {
    const ComposedComponent = this.props.composedComponent;
    return (
      <div className="authenticated">
        {this.props.authenticated ? (
          <ComposedComponent {...this.props} />
        ) : null}
      </div>
    );
  }
}

function RequireAuth(ComposedComponent) {
  const mapStateToProps = state => ({
    authenticated: state.auth.get("isAuthenticated"),
    composedComponent: ComposedComponent
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}

export default RequireAuth;
