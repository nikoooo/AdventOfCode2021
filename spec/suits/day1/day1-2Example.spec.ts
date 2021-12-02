import { day1Step2DepthIncreases } from "../../../src/day1/Day1-2CountIncrease";
import { day1ExampleValues } from "../../../src/day1/input/day1example";

describe("Day1 part 2 example values", function() {
  it("increased 4 times", function() {
    expect(day1Step2DepthIncreases(day1ExampleValues)).toBe(4);
  });
});