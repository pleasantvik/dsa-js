import { factorial } from "./factorial";

describe(factorial.name, () => {
  it("Test 1", () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });
  it("Test 2", () => {
    const result = factorial(4);
    expect(result).toBe(24);
  });
  it("Test 1", () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });
  it("Test 1", () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });
});
