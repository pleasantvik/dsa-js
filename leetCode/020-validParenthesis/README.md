---

# Question

- Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

# Hint - Try use the Pseudocode to implement the solution before checking the code

# PSEUDOCODE

- Initialize an empty array
- Loop through the input
  - If you encounter an opening bracket in the current iteration push its corresponding closing bracket into the array
  - if you encounter a closing bracket remove the last elment in the array and check if the removed elment === to the closing bracket in the current iteration - if they are not the same return false and finish the program
- check the length of the array
  if it is greater than zero return false
  if it is equal to zero return true

**Example**

`Input: s = "()"
 Output: true
`
**Example 2:**

`Input: s = "()[]{}"
 Output: true
`
**Example 3:**

`Input: s = "(]"
 Output: false
`

_Guaranteed constraints:_

- 1 <= s.length <= 104
- s consists of parentheses only '()[]{}'.
