import React, { Component } from "react";
import { connect } from "react-redux";

import { receiveAsset } from "../actions/index";
import ReceiveAssetForm from "../components/ReceiveAssetForm";

export class ReceiveAssetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "", nameErr: null };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e, { key, value }) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }

  handleSubmit() {
    const { name, comment } = this.state;

    if (!name) {
      this.setState({ nameErr: "Name is a required field" });
      return;
    } else {
      this.props.receiveAsset(name, comment);
      this.setState({ name: "", comment: "", nameErr: null });
    }
  }

  render() {
    const { name, comment } = this.state;
    const { nameErr } = this.state;

    return (
      <ReceiveAssetForm
        name={name}
        nameErr={nameErr}
        comment={comment}
        onChange={this.onChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    receiveAsset: (name, comment) => dispatch(receiveAsset(name, comment))
  };
};

export default connect(undefined, mapDispatchToProps)(
  ReceiveAssetFormContainer
);
