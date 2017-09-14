import React from "react";
import { Form } from "semantic-ui-react";

const EditAssetForm = ({
  handleSubmit,
  handleNameChange,
  handleCommentChange,
  handleDispatch,
  name,
  comment
}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Input
        placeholder="Name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <Form.Input
        placeholder="Comment"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
      />
      <Form.Button content="Submit" label="edit" />
    </Form.Group>
  </Form>
);

export default EditAssetForm;
