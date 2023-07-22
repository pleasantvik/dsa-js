export function selectionSort(arr) {
  //Swapping function
  function swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for (let i = 0; i < arr.length; i++) {
    let lowest = i; // lowest is 0 in the first iteration
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      swap(arr, lowest, i);
    }
  }
  return arr;
}

console.log(selectionSort([5, 4, 1, 6, 7]));
