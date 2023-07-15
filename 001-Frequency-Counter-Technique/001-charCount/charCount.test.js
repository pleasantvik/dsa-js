// import { charCount } from "./charCount";
const charCount = require("./charCount");

describe(charCount.name, () => {
  it("test 1", () => {
    const result = charCount("abc");

    expect(result).toEqual({ a: 1, b: 1, c: 1 });
  });
  it("test 2", () => {
    const result = charCount("abc12");

    expect(result).toEqual({ a: 1, b: 1, c: 1, 1: 1, 2: 1 });
  });
  it("test 3", () => {
    const result = charCount("JaVa Is FuN");

    expect(result).toEqual({ j: 1, a: 2, v: 1, i: 1, s: 1, f: 1, u: 1, n: 1 });
  });
  it("test 4", () => {
    const result = charCount("");

    expect(result).toEqual({});
  });
});
