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
      position: "relative",
      paddingTop: "2em"
    }}
  >
    <Segment inverted color="black">
      <Form onSubmit={handleSubmit} inverted>
        <h2 style={{ textAlign: "center" }}>Add Received Asset To Inventory</h2>
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
