// Get the digit
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  let count = Math.abs(num).toString().length;
  return count;
}

// Get how many times we need to sort
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++)
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));

  return maxDigits;
}

const radixSort = (nums) => {
  //Number of time we need to store
  let maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // make an empty bucket
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    nums = [].concat(...digitBuckets);

    // console.log(digitBuckets);
  }

  return nums;
};

console.log(radixSort([9872, 23, 12, 222, 1, 45, 677]));
