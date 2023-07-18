import { sumRange } from "./sumRange";

describe(sumRange.name, () => {
  it("Test 1", () => {
    const result = sumRange(3);
    expect(result).toBe(6);
  });
  it("Test 2", () => {
    const result = sumRange(4);
    expect(result).toBe(10);
  });
  it("Test 3", () => {
    const result = sumRange(5);
    expect(result).toBe(15);
  });
  it("Test 4", () => {
    const result = sumRange(0);
    expect(result).toBe(0);
  });
});
