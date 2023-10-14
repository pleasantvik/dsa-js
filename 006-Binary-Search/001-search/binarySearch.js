//Given a sorted array of integers, write a function called search which accepts a value and return the index where the value is passed into the function is located. If the value is not there return -1

export function binarySearch(arr, target) {
  let leftPosition = 0;
  let rightPosiition = arr.length - 1;
  let middle = Math.floor((leftPosition + rightPosiition) / 2);

  while (leftPosition <= rightPosiition) {
    if (target < arr[middle]) {
      rightPosiition = middle - 1;
    } else if (target > arr[middle]) {
      leftPosition = middle + 1;
    } else if (target === arr[middle]) {
      return middle;
    }
    middle = Math.floor((leftPosition + rightPosiition) / 2);
  }

  if (arr[middle] === target) {
    return middle;
  } else {
    return -1;
  }
  // return arr[middle] === target ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 4));

console.log(binarySearch([1, 2, 3, 4, 88, 102, 576], 9000));
// console.log(binarySearch([3, 2, 1], 1));
