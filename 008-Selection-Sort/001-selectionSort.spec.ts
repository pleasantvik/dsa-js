import { selectionSort } from "./001-selectionSort";

describe(selectionSort.name, () => {
  it("Test 1", () => {
    const result = selectionSort([4, 48, 2, 5, 1]);
    expect(result).toEqual([1, 2, 4, 5, 48]);
  });
});
