import React from "react";
import { Form, Label, Segment } from "semantic-ui-react";

const ReceiveAssetForm = ({
  handleSubmit,
  handleNameChange,
  handleCommentChange,
  name,
  comment,
  nameErr
}) => (
  <div
    style={{
      width: "30%",
      left: "35%",
      position: "relative"
    }}
  >
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Group inline>
          <Form.Field required error={nameErr !== null}>
            {nameErr ? <Label pointing="below">{nameErr}</Label> : null}
            <Form.Input
              inverted
              name="name"
              label="Name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              inverted
              label="Comments"
              placeholder="Add Comments..."
              name="Comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </Form.Field>
          <Form.Button primary content="Submit" />
        </Form.Group>
      </Form>
    </Segment>
  </div>
);

export default ReceiveAssetForm;
