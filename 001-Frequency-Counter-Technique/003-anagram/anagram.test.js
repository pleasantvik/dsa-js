const anagram = require("./anagram");

describe(anagram.name, () => {
  it("test 1", () => {
    const result = anagram("iceman", "manice");
    expect(result).toBe(true);
  });
  it("test 1", () => {
    const result = anagram("abca", "abc");
    expect(result).toBe(false);
  });
});
