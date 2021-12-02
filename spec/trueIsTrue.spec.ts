import "jasmine";

describe("The value of true", function() {
  let a: boolean = false;

  it("is true", function() {
    a = true;

    expect(a).toBe(true);
  });

  it("is not false", function() {
    a = true;

    expect(a).toBe(!false);
  });
});