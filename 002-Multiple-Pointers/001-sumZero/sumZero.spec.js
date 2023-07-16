const sumZero = require("./sumZero");

describe(sumZero.name, () => {
  it("Test 1", () => {
    const result = sumZero([-3, -2, 1, 0, 0, 2]);
    expect(result).toEqual([1, 5]);
  });
  it("Test 2", () => {
    const result = sumZero([-67, -22, -5, 5, 99, 100]);
    expect(result).toEqual([2, 3]);
  });
  it("Test 3", () => {
    const result = sumZero([100, 99, 22, -5, -22, -67]);
    expect(result).toEqual([2, 4]);
  });
  it("Test 4", () => {
    const result = sumZero([-67, -22, -5, 67, 99, 100]);
    expect(result).toEqual([0, 3]);
  });
});
