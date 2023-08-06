---

# Question

- Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

# PSEUDOCODE

- Initialize a counter to keep track of element in array not equal to the value and set is value to zero
- Loop through the array, check if the current iteration is not equal to value
  - If its not equal, swap the array in counter to equal the array at current loop
  - increment counter
- return counter

**Example**

`Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores)`

_Guaranteed constraints:_

- 0 <= nums.length <= 100
- 0 <= nums[i] <= 50
- 0 <= val <= 100
