//Implement a function called countUniqueValues, which accepts a sorted array, and count the unique value in the array. There can be negative number in the array, but its always sorted

const countUniqueValue = (arr) => {
  let pointerOne = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let j = 1; j < arr.length; j++) {
    if (arr[pointerOne] !== arr[j]) {
      pointerOne++;
      arr[pointerOne] = arr[j];
    }
  }

  return pointerOne + 1;
};

console.log(countUniqueValue([]));
module.exports = countUniqueValue;
