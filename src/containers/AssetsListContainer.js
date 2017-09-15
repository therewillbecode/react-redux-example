import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AssetsList from "../components/AssetsList";
import AssetFilter from "../components/AssetFilter";
import { filterAssets } from "../selectors/index";

class AssetsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { statusFilter: "all", searchQuery: "" };
    this.navigateToAsset = this.navigateToAsset.bind(this);
    this.updateStatusFilter = this.updateStatusFilter.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  navigateToAsset(id) {
    this.props.history.push(`/asset/${id}`);
  }

  updateStatusFilter(e, { value }) {
    this.setState({ statusFilter: value });
  }

  handleSearchChange(e, { value }) {
    this.setState({ searchQuery: value });
  }

  render() {
    const { assets } = this.props;
    const { statusFilter, searchQuery } = this.state;
    const filteredAssets =
      statusFilter === "all"
        ? assets
        : filterAssets(assets, ({ status }) => status === statusFilter);

    return (
      <div>
        <AssetFilter
          handleChange={this.updateStatusFilter}
          handleSearchChange={this.handleSearchChange}
          searchQuery={searchQuery}
        />
        <AssetsList
          assets={
            searchQuery ? (
              filteredAssets.filter(({ name }) => name.includes(searchQuery))
            ) : (
              filteredAssets
            )
          }
          navigateToAsset={this.navigateToAsset}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default withRouter(connect(mapStateToProps)(AssetsListContainer));
