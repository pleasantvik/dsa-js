/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


 */

let removeDuplicates = function (nums) {
  let pointerOne = 0;
  if (nums.length === 0) {
    return 0;
  }
  for (let j = 1; j < nums.length; j++) {
    if (nums[pointerOne] !== nums[j]) {
      pointerOne++;
      nums[pointerOne] = nums[j];
    }
  }

  return pointerOne + 1;
};

console.log(removeDuplicates([1, 2, 2, 3]));
