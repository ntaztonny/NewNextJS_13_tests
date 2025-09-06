import { add } from "./utils";

describe("add", () => {
  it("should return the sum of two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return the sum of a positive and negative number", () => {
    expect(add(5, -2)).toBe(3);
  });

  it("should return zero when adding zero and zero", () => {
    expect(add(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});
