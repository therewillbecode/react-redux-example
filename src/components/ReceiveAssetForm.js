import React from "react";
import { Form, Label, Segment } from "semantic-ui-react";

const ReceiveAssetForm = ({
  handleSubmit,
  onChange,
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
    <Segment inverted color="grey" textAlign="center">
      <Form inverted onSubmit={handleSubmit} widths="equal">
        <h2>Add Received Asset To Inventory</h2>
        <Form.Group inline>
          <Form.Field required error={nameErr !== null}>
            <Label color="grey" size="huge">
              Name
            </Label>
            <Form.Input
              name="name"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            {nameErr ? <Label pointing="above">{nameErr}</Label> : null}
          </Form.Field>
          <Form.Field>
            <Label color="grey" size="huge">
              Comments
            </Label>
            <Form.TextArea
              placeholder="Add Comments..."
              name="comment"
              value={comment}
              onChange={onChange}
            />
          </Form.Field>
        </Form.Group>
        <Segment inverted color="grey">
          <Form.Button primary content="Submit" />
        </Segment>
      </Form>
    </Segment>
  </div>
);

export default ReceiveAssetForm;
