//Given a sorted array of integers, write a function called search which accepts a value and return the index where the value is passed into the function is located. If the value is not there return -1

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;

  //   return middle;
}

console.log(search([1, 2, 3, 4, 5], 4));

console.log(search([1, 2, 3, 4, 88, 102, 576], 102));
