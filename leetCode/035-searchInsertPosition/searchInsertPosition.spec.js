import { searchInsertPosition } from "./searchInsertPosition";

describe(searchInsertPosition.name, () => {
  it("Test 1", () => {
    const result = searchInsertPosition([1, 2, 3], 2);
    expect(result).toBe(1);
  });
  it("Test 2", () => {
    const result = searchInsertPosition([1, 2, 3], 1020);
    expect(result).toBe(3);
  });
});
