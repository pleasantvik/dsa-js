// Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

/**
 * maxSubAraySum([1,2,5,2,8,1,5], 2) //?. Max sum of 2 consecutive nmber
 * maxSubAraySum([1,2,5,2,8,1,5], 4) //?. Max sum of 4 consecutive nmber
 */

// * WIth loop APPROACH
// function maxSubAraySum(arr, num) {
//   //Base case
//   if (num > arr.length) {
//     return null;
//   }

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;

//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];

//       console.log(arr[i + j]);
//     }

//     if (temp > max) {
//       max = temp;
//     }

//     // console.log(max, "MAX");
//     // console.log(max, temp);
//   }
//   return max;
// }

// maxSubAraySum([1, 2, 5, 2, 8, 1, 5], 2);

//SLIDING WINDOW
export function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  //*BASE CASE
  if (arr.length < num) return null;

  //! start the first loop at zero. Loop for the length of second argument. Store the sum in variable
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  //?. Start second loop at num
  for (let i = num; i < arr.length; i++) {
    //?. remove the starting digit of the previous array then add the current digit of the current iteration to the value of tempSum
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2);
