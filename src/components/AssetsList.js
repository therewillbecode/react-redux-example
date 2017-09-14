import React, { Component } from "react";
import { Link } from "react-router-dom";

class AssetsList extends Component {
  render() {
    const { assets } = this.props;

    return (
      <div>
        <table style={{ width: "30%" }}>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>state</th>
            <th>comment</th>
          </tr>
          {assets.map(({ id, name, state, comment }) => (
            <Link to={`/asset/${id}`}>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{state}</td>
                <td>{comment}</td>
              </tr>
            </Link>
          ))}
        </table>
      </div>
    );
  }
}

export default AssetsList;
