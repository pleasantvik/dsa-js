const countUniqueValue = require("./countUniqueValues");
describe(countUniqueValue.name, () => {
  it("Test 1", () => {
    const result = countUniqueValue([]);
    expect(result).toBe(0);
  });
  it("Test 2", () => {
    const result = countUniqueValue([1, 1, 2]);
    expect(result).toBe(2);
  });
  it("Test 3", () => {
    const result = countUniqueValue([1, 2, 2, 3, 4, 4, 5, 6]);
    expect(result).toBe(6);
  });
});
