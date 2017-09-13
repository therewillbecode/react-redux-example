import { List } from "immutable";

import * as selectors from "../index";

describe("selectors", () => {
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
