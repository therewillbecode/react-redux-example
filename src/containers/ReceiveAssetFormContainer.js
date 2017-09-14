import React, { Component } from "react";
import { connect } from "react-redux";

import { receiveAsset } from "../actions/index";
import ReceiveAssetForm from "../components/ReceiveAssetForm";

class ReceiveAssetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e, { name, value }) {
    this.setState({ name: value });
  }

  handleCommentChange(e, { name, value }) {
    this.setState({ comment: value });
  }

  handleSubmit() {
    const { name, comment } = this.state;

    if (!name) {
      return;
    }

    this.props.receiveAsset(name, comment);
    this.setState({ name: "", comment: "" });
  }

  render() {
    const { name, comment } = this.state;

    return (
      <ReceiveAssetForm
        name={name}
        comment={comment}
        handleCommentChange={this.handleCommentChange}
        handleNameChange={this.handleNameChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveAsset: (name, comment) => dispatch(receiveAsset(name, comment))
  };
};

export default connect(undefined, mapDispatchToProps)(
  ReceiveAssetFormContainer
);
