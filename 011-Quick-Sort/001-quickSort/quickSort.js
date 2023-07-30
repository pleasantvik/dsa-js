function pivot(arr, start = 0, end = arr.length + 1) {
  const swapFunc = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  //Pivot
  let currentPivot = arr[start];

  // swapIdx which keep track of where the pivot should end
  let swapIdx = start;

  for (let i = 1; i < arr.length; i++) {
    if (currentPivot > arr[i]) {
      swapIdx++;
      swapFunc(arr, swapIdx, i);
    }
  }
  swapFunc(arr, start, swapIdx);

  return swapIdx;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  //Base Case
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    //Left side
    quickSort(arr, left, pivotIdx - 1);
    // Right
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([10, 4, 1, 2, 9]));
// console.log(quickSort(["z", "e", "c", "adebato", "ezekiel", "adedayo"]));
