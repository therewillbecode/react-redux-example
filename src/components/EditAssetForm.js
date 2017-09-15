import React from "react";
import { Button, Form } from "semantic-ui-react";

const EditAssetForm = ({
  dispatched,
  dispatchAsset,
  handleSubmit,
  handleNameChange,
  handleCommentChange,
  name,
  comment
}) => (
  <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Field>
          <label>Edit Name</label>
          <Form.Input
            disabled={dispatched}
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Edit Comment</label>
          <Form.TextArea
            name="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Button content="Update Asset" />
        </Form.Field>
      </Form.Group>
    </Form>
    <Button
      onClick={dispatchAsset}
      icon={dispatched ? "ship" : null}
      disabled={dispatched}
      size="large"
      primary
      content={dispatched ? "Dispatched" : "Dispatch Asset"}
    />
  </div>
);

export default EditAssetForm;
