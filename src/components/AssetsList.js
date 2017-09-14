import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { withRouter } from "react-router";

const navigateToAsset = (history, id) => history.push(`/asset/${id}`);

const AssetsList = ({ assets, history }) => (
  <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Time Received</Table.HeaderCell>
        <Table.HeaderCell>Time Dispatched</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {assets.map(({ id, name, state, comment }) => (
        <Table.Row onClick={() => navigateToAsset(history, id)}>
          <Table.Cell>{id}</Table.Cell>
          <Table.Cell>{name}</Table.Cell>
          <Table.Cell>{state}</Table.Cell>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default withRouter(AssetsList);
