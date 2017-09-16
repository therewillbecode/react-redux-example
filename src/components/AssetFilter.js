import React from "react";
import { Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: 1, text: "All", value: "all" },
  { key: 2, text: "Received", value: "received" },
  { key: 3, text: "Dispatched", value: "dispatched" }
];

const AssetFilter = ({ handleChange, updateSearchQuery, searchQuery }) => (
  <div
    style={{
      padding: "2em"
    }}
  >
    <Dropdown
      text="Filter Assets"
      button
      icon="filter"
      options={options}
      onChange={handleChange}
      className="icon"
    />
    <Input
      name="name"
      label="Search by name"
      placeholder="Name"
      value={searchQuery}
      onChange={updateSearchQuery}
    />
  </div>
);

export default AssetFilter;
