import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

const ReceiveAssetForm = ({
  handleSubmit,
  handleNameChange,
  handleCommentChange,
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
      <Form.Button content="Submit" />
    </Form.Group>
  </Form>
);

export default ReceiveAssetForm;
