export function insertionSort(arr) {
  function swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      if (currentVal < arr[j]) {
        swap(arr, j + 1, j);
      }

      //   arr[j + 1] = arr[j];
    }
    // arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([1, 2, 23, 4, 98, 5]));
