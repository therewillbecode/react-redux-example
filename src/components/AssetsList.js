import cuid from "cuid";
import React from "react";
import { Table } from "semantic-ui-react";

const assetAttributes = {
  id: "ID",
  name: "Name",
  status: "Status",
  receivedTimestamp: "Time Received",
  dispatchedTimestamp: "Time Dispatched",
  comment: "Comments"
};

const AssetsList = ({ assets, navigateToAsset }) => (
  <Table celled padded inverted selectable style={{ marginTop: "0" }}>
    <Table.Header>
      <Table.Row>
        {Object.values(assetAttributes).map(key => (
          <Table.HeaderCell key={key} textAlign="center">
            <h3>{key}</h3>
          </Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {assets.map(asset => (
        <Table.Row key={asset.id} onClick={() => navigateToAsset(asset.id)}>
          {Object.keys(assetAttributes).map(attribute => (
            <Table.Cell key={cuid()} textAlign="center">
              <h5>{asset[attribute]}</h5>
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default AssetsList;
