import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";

const AssetsList = ({ assets, navigateToAsset }) => (
  <Table celled padded inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign="center">ID</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Name</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Status</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Time Received</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Time Dispatched</Table.HeaderCell>
        <Table.HeaderCell textAlign="center">Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {assets.map(
        ({
          id,
          name,
          status,
          receivedTimestamp,
          dispatchedTimestamp,
          comment
        }) => (
          <Table.Row key={id} onClick={() => navigateToAsset(id)}>
            <Table.Cell textAlign="center">{id}</Table.Cell>
            <Table.Cell textAlign="center">{name}</Table.Cell>
            <Table.Cell textAlign="center">{status}</Table.Cell>
            <Table.Cell textAlign="center">{receivedTimestamp}</Table.Cell>
            <Table.Cell textAlign="center">{dispatchedTimestamp}</Table.Cell>
            <Table.Cell textAlign="left">{comment}</Table.Cell>
          </Table.Row>
        )
      )}
    </Table.Body>
  </Table>
);

export default AssetsList;
