import { bubbleSort } from "./001-bubbleSort";

describe(bubbleSort.name, () => {
  it("Test 1", () => {
    const result = bubbleSort([4, 48, 2, 5, 1]);
    expect(result).toEqual([1, 2, 4, 5, 48]);
  });
});
