import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import AssetsList from "../components/AssetsList";
import AssetFilter from "../components/AssetFilter";
import {
  filterAssetsByStatus,
  filterAssetsBySubstring
} from "../selectors/index";

export class AssetsListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { statusFilter: "all", searchQuery: "" };
    this.navigateToAsset = this.navigateToAsset.bind(this);
    this.updateStatusFilter = this.updateStatusFilter.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
  }

  navigateToAsset(id) {
    this.props.history.push(`/asset/${id}`);
  }

  updateStatusFilter(e, { value }) {
    this.setState({ statusFilter: value });
  }

  updateSearchQuery(e, { value }) {
    this.setState({ searchQuery: value });
  }

  render() {
    const { assets } = this.props;
    const { statusFilter, searchQuery } = this.state;

    const filteredAssets = filterAssetsBySubstring(
      filterAssetsByStatus(assets, statusFilter),
      "name",
      searchQuery
    );

    return (
      <div>
        <AssetFilter
          handleChange={this.updateStatusFilter}
          updateSearchQuery={this.updateSearchQuery}
          searchQuery={searchQuery}
        />
        <AssetsList
          assets={filteredAssets}
          navigateToAsset={this.navigateToAsset}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ assets }) => ({ assets });

export default withRouter(connect(mapStateToProps)(AssetsListContainer));
