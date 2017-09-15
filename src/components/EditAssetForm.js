import React from "react";
import { Button, Form, Label, Segment } from "semantic-ui-react";

const EditAssetForm = ({
  dispatched,
  dispatchAsset,
  handleSubmit,
  handleNameChange,
  handleCommentChange,
  name,
  id,
  comment
}) => (
  <div
    style={{
      width: "30%",
      left: "35%",
      position: "relative",
      padding: "3em"
    }}
  >
    <Segment inverted color="grey" textAlign="center">
      <Form inverted onSubmit={handleSubmit}>
        <h2>Edit Asset ID: {id} </h2>
        <Form.Group>
          <Form.Field width="4">
            <Label size="huge" inverted color="grey">
              Edit Name
            </Label>
            <Form.Input
              disabled={dispatched}
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </Form.Field>
          <Form.Field width="8">
            <Label inverted size="huge" color="grey">
              Edit Comments
            </Label>{" "}
            <Form.TextArea
              name="comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </Form.Field>
          <Form.Field width="4">
            <div style={{ marginTop: "3.75em" }}>
              <Form.Button inverted primary content="Update Asset" />
            </div>
          </Form.Field>
        </Form.Group>
        <Button
          onClick={dispatchAsset}
          icon={dispatched ? "ship" : null}
          disabled={dispatched}
          primary
          content={dispatched ? "Dispatched" : "Dispatch Asset"}
        />
      </Form>
    </Segment>
  </div>
);

export default EditAssetForm;
