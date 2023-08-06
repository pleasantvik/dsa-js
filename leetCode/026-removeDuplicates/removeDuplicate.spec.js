import { removeDuplicates } from "./removeDuplicate";
describe(removeDuplicates.name, () => {
  it("Test 1", () => {
    const result = removeDuplicates([]);
    expect(result).toBe(0);
  });
  it("Test 2", () => {
    const result = removeDuplicates([1, 1, 2]);
    expect(result).toBe(2);
  });
  it("Test 3", () => {
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6]);
    expect(result).toBe(6);
  });
});
