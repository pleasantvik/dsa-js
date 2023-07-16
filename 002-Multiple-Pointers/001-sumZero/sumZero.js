//Write a function called sumZero, which accept a sorted array of intergers. The function should find the first pair that sum to zero. Return an array that meets the condition or undefined of there os no

const sumZero = (arr) => {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    let sum = arr[leftPointer] + arr[rightPointer];
    if (sum === 0) {
      return [leftPointer, rightPointer];
    } else if (sum > 0 && arr[leftPointer] > 0) {
      leftPointer++;
    } else if (sum > 0 && arr[leftPointer] < 0) {
      rightPointer--;
    } else if (sum < 0 && arr[leftPointer] < 0) {
      leftPointer++;
    } else if (sum < 0 && arr[leftPointer] > 0) {
      rightPointer--;
    }
  }
};

console.log(sumZero([-3, -2, 1, 0, 0, 2]));
console.log(sumZero([-67, -22, -5, 67, 99, 100]));
console.log(sumZero([100, 99, 22, -5, -22, -67]));
console.log(sumZero([-67, -22, -5, 5, 99, 100]));

module.exports = sumZero;
