//Given a sorted array of integers, write a function called search which accepts a value and return the index where the value is passed into the function is located. If the value is not there return -1

function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);

    if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;

  //   return middle;
}

console.log(search([1, 2, 3, 4, 5], 4));

console.log(search([1, 2, 3, 4, 88, 102, 576], 102));
