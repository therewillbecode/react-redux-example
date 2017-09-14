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
    console.log(this.state);
  }

  handleCommentChange(e, { name, value }) {
    this.setState({ comment: value });
    console.log(this.state);
  }

  handleSubmit() {
    const { name, comment } = this.state;
    console.log(name, comment, "submited");
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

const mapStateToProps = (state, ownProps) => {
  return {
    active: 5
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveAsset: (name, comment) => dispatch(receiveAsset(name, comment))
  };
};

export default connect(undefined, mapDispatchToProps)(
  ReceiveAssetFormContainer
);
