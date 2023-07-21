//Given a sorted array of integers, write a function called search which accepts a value and return the index where the value is passed into the function is located. If the value is not there return -1

export function binarySearch(arr, target) {
  let leftPosition = 0;
  let rightPosiition = arr.length - 1;
  let middle = Math.floor((leftPosition + rightPosiition) / 2);

  //   while (leftPosition < rightPosiition) {
  //     middle = Math.floor((leftPosition + rightPosiition) / 2);

  //     if (arr[middle] === target) {
  //       return middle;
  //     } else if (arr[middle] < target) {
  //       leftPosition = middle + 1;
  //     } else {
  //       rightPosiition = middle - 1;
  //     }
  //   }

  while (arr[middle] !== target) {
    if (target < arr[middle]) {
      rightPosiition = middle - 1;
    } else {
      leftPosition = middle + 1;
    }
    middle = Math.floor((leftPosition + rightPosiition) / 2);
  }

  return arr[middle] === target ? middle : -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 4));

console.log(binarySearch([1, 2, 3, 4, 88, 102, 576], 102));
// console.log(binarySearch([3, 2, 1], 1));
