import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "All", value: "all" },
  { key: 2, text: "Received", value: "received" },
  { key: 3, text: "Dispatched", value: "dispatched" }
];

const AssetFilter = ({ handleChange }) => (
  <Dropdown
    text="Filter Assets"
    button
    icon="filter"
    options={options}
    onChange={handleChange}
    className="icon"
  />
);

export default AssetFilter;
