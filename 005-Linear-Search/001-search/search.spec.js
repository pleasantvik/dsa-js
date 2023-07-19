import { search } from "./search";

describe(search.name, () => {
  it("Test 1", () => {
    const result = search("123", "2");
    expect(result).toBe(1);
  });
  it("Test 2", () => {
    const result = search([1, 2, 3, 4, 5, 6, 7, 8], 1);
    expect(result).toBe(0);
  });
  it("Test 3", () => {
    const result = search([1, 2, 3, 4, 5, 6, 7, 8], 10);
    expect(result).toBe(-1);
  });
  it("Test 3", () => {
    const result = search([1, 2, 3, 4, 5, 6, 7, true, false, undefined], false);
    expect(result).toBe(8);
  });
});
