import { binaryToNumber, flipBit, getMostCommonBit, splitBits } from "../functions";

describe("binaryToNumber", function() {
  it("should convert [0, 0, 0, 1] to 1", function() {
    expect(binaryToNumber([0, 0, 0, 1])).toBe(1);
  });

  it("should convert [0, 0, 1, 1] to 3", function() {
    expect(binaryToNumber([0, 0, 1, 1])).toBe(3);
  });
});

describe("splitBits", function() {
  it("should convert '0001' to [0, 0, 0, 1]", function() {
    expect(splitBits('0001')).toEqual([0, 0, 0, 1]);
  });

  it("should convert '0010' to [0, 0, 1, 0]", function() {
    expect(splitBits('0010')).toEqual([0, 0, 1, 0]);
  });
});

describe("getMostCommonBit", function() {
  it("should convert rows = 100, bit count 50", function() {
    expect(getMostCommonBit(51, 100)).toBe(1);
  });
  it("should convert rows = 100, bit count 49", function() {
    expect(getMostCommonBit(50, 100)).toBe(0);
  });
});

describe("flipBit", function() {
  it("1 to be 0", function() {
    expect(flipBit(1)).toBe(0);
  });
  it("0 to be 1", function() {
    expect(flipBit(0)).toBe(1);
  });
});