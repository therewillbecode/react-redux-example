/* eslint-disable */
import { fromJS, List } from "immutable";

import * as selectors from "../index";

describe("selectors", () => {
  describe("assetsSelector", () => {
    it("should return assets", () => {
      const assets = List([]);
      const state = fromJS({ assets, auth: {} });

      expect(selectors.assetsSelector(state)).toEqual(List([]));
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

  describe("filterAssetsByState", () => {
    const assets = List([
      {
        state: "received"
      },
      {
        state: "dispatched"
      }
    ]);
    it("should filter in received assets", () => {
      expect(selectors.filterAssetsByState(assets, "received")).toEqual(
        List([
          {
            state: "received"
          }
        ])
      );
    });

    it("should filter in dispatched assets", () => {
      expect(selectors.filterAssetsByState(assets, "dispatched")).toEqual(
        List([
          {
            state: "dispatched"
          }
        ])
      );
    });

    it("should return all assets if filter is undefined", () => {
      expect(selectors.filterAssetsByState(assets, undefined)).toEqual(assets);
    });
  });
});
