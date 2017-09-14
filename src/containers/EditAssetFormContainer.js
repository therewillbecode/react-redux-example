import React, { Component } from "react";
import { connect } from "react-redux";

import {
  editAssetName,
  editAssetComment,
  dispatchAsset
} from "../actions/index";
import { findAssetById } from "../selectors/index";
import EditAssetForm from "../components/ReceiveAssetForm";

class EditAssetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", comment: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { name, comment } = this.props.asset;
    this.setState({ name, comment });
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

    if (!name) {
      return;
    }

    this.props.receiveAsset(name, comment);
    this.setState({ name: "", comment: "" });
  }

  render() {
    const { name, comment } = this.state;
    const { editAssetName, editAssetComment, dispatchAsset } = this.props;

    return (
      <EditAssetForm
        name={name}
        comment={comment}
        handleCommentChange={this.handleCommentChange}
        handleNameChange={this.handleNameChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  asset: findAssetById(state.assets, ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editAssetName: name => dispatch(editAssetName(ownProps.id, name)),
    editAssetComment: comment => dispatch(editAssetName(ownProps.id, comment)),
    dispatchAsset: () => dispatch(dispatchAsset(ownProps.id))
  };
};

export default connect(undefined, mapDispatchToProps)(EditAssetFormContainer);
