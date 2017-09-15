import React, { Component } from "react";
import { connect } from "react-redux";

import EditAssetForm from "../components/EditAssetForm";
import {
  editAssetName,
  editAssetComment,
  dispatchAsset
} from "../actions/index";

export class EditAssetFormContainer extends Component {
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
  }

  handleCommentChange(e, { name, value }) {
    this.setState({ comment: value });
  }

  handleSubmit() {
    const { name, comment } = this.state;

    if (!name) {
      return;
    }

    this.props.editAssetComment(comment);
    this.props.editAssetName(name);
    this.setState({ name, comment });
  }

  render() {
    const { name, comment } = this.state;
    const { dispatchAsset, asset } = this.props;
    const { status, id } = asset;
    const dispatched = status === "dispatched";

    return (
      <EditAssetForm
        name={name}
        id={id}
        comment={comment}
        dispatched={dispatched}
        handleCommentChange={this.handleCommentChange}
        handleNameChange={this.handleNameChange}
        dispatchAsset={dispatchAsset}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, { asset }) => {
  return {
    editAssetName: name => dispatch(editAssetName(asset.id, name)),
    editAssetComment: comment => dispatch(editAssetComment(asset.id, comment)),
    dispatchAsset: () => dispatch(dispatchAsset(asset.id))
  };
};

export default connect(undefined, mapDispatchToProps)(EditAssetFormContainer);
