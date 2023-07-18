import { maxSubArraySum } from "./maxSubArraySum";

describe(maxSubArraySum.name, () => {
  it("Test 1", () => {
    const result = maxSubArraySum([], 2);
    expect(result).toBe(null);
  });
  it("Test 2", () => {
    const result = maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
    expect(result).toBe(10);
  });
});
