import { binarySearch } from "./binarySearch";

describe(binarySearch.name, () => {
  it("Test 1", () => {
    const result = binarySearch([1, 2, 3], 2);
    expect(result).toBe(1);
  });
});
