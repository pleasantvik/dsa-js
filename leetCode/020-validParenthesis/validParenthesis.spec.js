import { validParenthesis } from "./validParenthesis";

describe(validParenthesis.name, () => {
  it("test 1", () => {
    const result = validParenthesis("()([{}])");
    expect(result).toBe(true);
  });
  it("test 2", () => {
    const result = validParenthesis("");
    expect(result).toBe(false);
  });
  it("test 3", () => {
    const result = validParenthesis("}");
    expect(result).toBe(false);
  });
  it("test 4", () => {
    const result = validParenthesis("()([{}])()[{({})}]");
    expect(result).toBe(true);
  });
});
