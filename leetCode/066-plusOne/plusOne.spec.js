// import { charCount } from "./charCount";
import { plusOne } from "./plusOne";

describe(plusOne.name, () => {
  it("test 1", () => {
    const result = plusOne([9]);

    expect(result).toEqual([1, 0]);
  });
  it("test 2", () => {
    const result = plusOne([9, 8, 9]);

    expect(result).toEqual([9, 9, 0]);
  });
  it("test 3", () => {
    const result = plusOne([1, 2, 3]);

    expect(result).toEqual([1, 2, 4]);
  });
  it("test 4", () => {
    const result = plusOne([9, 9, 9]);

    expect(result).toEqual([1, 0, 0, 0]);
  });
});
