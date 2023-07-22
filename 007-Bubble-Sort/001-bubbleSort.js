/**
 * function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], [arr[j + 1]]] = [arr[j + 1], [arr[j]]];
      }
    }
  }

  return arr;
}
 */

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // //SWAP
//         // let temp = arr[j];
//         // arr[j] = arr[j + 1];

//         // arr[j + 1] = temp;

//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// }

// WITH SWAP FUNCTION

export function bubbleSort(arr) {
  let noSwaps;
  //noswaps is used to check when it is true in one iteration, it means we are done and can break the loop
  function swap(arr, idx1, idx2) {
    return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  }

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([20, 2, 7, 4, 1, 40]));
