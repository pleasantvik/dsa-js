---

# Question

- Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

# PSEUDOCODE

- Initialize a variable total to keep track of the sum
- Loop through the given array stating at i = 0
  - Create an inner loop which start at i + i - update the value of total to equal num[i] + num[j] - check if sum equals the target, if yes return i and j

**Example**

`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
`
**Example 2:**

`Input: nums = [3,2,4], target = 6
Output: [1,2]`
**Example 3:**

_Guaranteed constraints:_

- 2 <= nums.length <= 104
- 109 <= nums[i] <= 109
- 109 <= target <= 109
- Only one valid answer exists.
