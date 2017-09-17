/* eslint-disable */
import { downloadStateCSV } from "../index";

describe("downloadStateCSV", () => {
  it("should return a function", () => {
    expect(typeof downloadStateCSV({})).toEqual("function");
  });
});
