/* eslint-disable */
import { Map, List } from "immutable";

import * as selectors from "../index";

describe("selectors", () => {
  describe("assetsSelector", () => {
    it("should return assets", () => {
      const assets = List([]);
      const auth = Map({});
      const state = { assets, auth };

      expect(selectors.assetsSelector(state)).toEqual(assets);
    });
  });

  describe("authSelector", () => {
    it("should return auth", () => {
      const assets = List([]);
      const auth = Map({});
      const state = { assets, auth };

      expect(selectors.authSelector(state)).toEqual(auth);
    });
  });

  describe("findAssetById", () => {
    it("should find asset by id", () => {
      const searchId = "h84Ia301";
      const assets = List([
        {
          id: searchId
        },
        {
          id: "43vmn4Z2"
        }
      ]);

      expect(selectors.findAssetById(assets, searchId)).toEqual({
        id: searchId
      });
    });
  });

  describe("filterAssetsByStatus", () => {
    const assets = List([
      {
        status: "received"
      },
      {
        status: "dispatched"
      }
    ]);

    it("should filter in received assets", () => {
      expect(selectors.filterAssetsByStatus(assets, "received")).toEqual(
        List([
          {
            status: "received"
          }
        ])
      );
    });

    it("should filter in dispatched assets", () => {
      expect(selectors.filterAssetsByStatus(assets, "dispatched")).toEqual(
        List([
          {
            status: "dispatched"
          }
        ])
      );
    });

    it("should return all assets", () => {
      expect(selectors.filterAssetsByStatus(assets, "all")).toEqual(assets);
    });
  });

  describe("filterAssetBySubstring", () => {
    const assets = List([
      {
        name: "pear"
      },
      {
        name: "apple"
      }
    ]);
    const key = "name";
    const substring = "app";

    it("should return assets where value includes substring for given key", () => {
      expect(selectors.filterAssetsBySubstring(assets, key, substring)).toEqual(
        List([
          {
            name: "apple"
          }
        ])
      );
    });

    it("should return all assets if substring is undefined", () => {
      const substring = undefined;
      expect(selectors.filterAssetsBySubstring(assets, key, substring)).toEqual(
        assets
      );
    });
  });
});
