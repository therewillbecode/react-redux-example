import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

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
            <div style={{ marginTop: "1.6em" }}>
              <label>Edit Name</label>
              <Form.Input
                disabled={dispatched}
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </Form.Field>
          <Form.Field width="8">
            <label>Edit Comment</label>
            <Form.TextArea
              name="comment"
              value={comment}
              onChange={handleCommentChange}
            />
          </Form.Field>
          <Form.Field width="4">
            <div style={{ marginTop: "2.5em" }}>
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
