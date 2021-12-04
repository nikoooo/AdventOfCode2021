import { day1ExampleValues } from "../../inputs/day1example";
import { day1Step2DepthIncreases } from "../../../src/day1/Day1-2CountIncrease";

describe("Day1 part 2 example values", function() {
  it("increased 5 times", function() {
    expect(day1Step2DepthIncreases(day1ExampleValues)).toBe(5);
  });
});