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
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { name, comment } = this.props.asset;
    this.setState({ name, comment });
  }

  onChange(e, { name, value }) {
    const newState = {};
    newState[name] = value;
    this.setState(newState);
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
        onChange={this.onChange}
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
