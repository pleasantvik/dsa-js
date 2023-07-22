import { insertionSort } from "./001-insertionSort";

describe(insertionSort.name, () => {
  it("Test 1", () => {
    const result = insertionSort([4, 48, 2, 5, 1]);
    expect(result).toEqual([1, 2, 4, 5, 48]);
  });
});
