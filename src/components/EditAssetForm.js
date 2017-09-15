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
    <Segment inverted color="black">
      <Form inverted onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center" }}>Edit Asset ID: {id} </h2>
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
            <div style={{ marginTop: "2em" }}>
              <Form.Button
                inverted
                primary
                size="large"
                content="Update Asset"
              />
            </div>
          </Form.Field>
        </Form.Group>

        <Segment inverted color="black">
          <div style={{ position: "relative", left: "32%" }}>
            <Button
              onClick={dispatchAsset}
              icon={dispatched ? "ship" : null}
              disabled={dispatched}
              size="huge"
              primary
              content={dispatched ? "Dispatched" : "Dispatch Asset"}
            />
          </div>
        </Segment>
      </Form>
    </Segment>
  </div>
);

export default EditAssetForm;
