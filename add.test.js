const add = require("./add");

// test("adds 1 + 2 to equal 3", () => {
//   expect(add(1, 2)).toBe(3);
// });

describe(add.name, () => {
  it("test 1", () => {
    const result = add(1, 2);

    expect(result).toBe(3);
  });
  it("test 2", () => {
    const result = add(10, 2);

    expect(result).toBe(12);
  });
  it("test 3", () => {
    const result = add(11, "2");

    expect(result).toBe("112");
  });
});
