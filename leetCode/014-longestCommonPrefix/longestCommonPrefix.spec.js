import { longestCommonPrefix } from "./longestCommonPrefix";

describe(longestCommonPrefix.name, () => {
  it("test 1", () => {
    const result = longestCommonPrefix(["flower", "flour", "flow", "flake"]);
    expect(result).toBe("fl");
  });
  it("test 2", () => {
    const result = longestCommonPrefix([]);
    expect(result).toBe("");
  });
  it("test 3", () => {
    const result = longestCommonPrefix(["flower"]);
    expect(result).toBe("flower");
  });
});
