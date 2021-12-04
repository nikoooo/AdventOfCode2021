import { day1DepthIncreases } from "../../../src/day1/Day1CountIncrease";
import { day1ExampleValues } from "../../inputs/day1example";

describe("Day1 example values", function() {
  it("contains only non NaN numbers", function() {
    expect(day1ExampleValues.every(Number.isInteger)).toBe(true);
  });

  it("increased 7 times", function() {
    expect(day1DepthIncreases(day1ExampleValues)).toBe(7);
  });
});