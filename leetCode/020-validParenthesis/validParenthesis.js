/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
 */

export function validParenthesis(s) {
  let stack = [];

  if (s.length === 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{") {
      stack.push("}");
    } else if (s[i] === "[") {
      stack.push("]");
    } else if (s[i] === "(") {
      stack.push(")");
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validParenthesis("()([{}])"));
