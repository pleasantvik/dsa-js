import { removeElement } from "./removeElement";

describe(removeElement.name, () => {
  it("test 1", () => {
    const result = removeElement([1, 22, 3], 4);
    expect(result).toBe(3);
  });
  it("test 2", () => {
    const result = removeElement([1, 2, 2, 3], 2);
    expect(result).toBe(2);
  });
  it("test 3", () => {
    const result = removeElement([], 4);
    expect(result).toBe(0);
  });
  it("test 4", () => {
    const result = removeElement([22, 22, 22], 22);
    expect(result).toBe(0);
  });
  it("test 5", () => {
    const result = removeElement([22, 22, 22], 0);
    expect(result).toBe(3);
  });
});
