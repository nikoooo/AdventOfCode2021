import { day1Input } from "../../inputs/day1";

describe("Day1 values", function() {
  it("contains only non NaN numbers", function() {
    expect(day1Input.every(Number.isInteger)).toBe(true);
  });
});