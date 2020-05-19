// Given an array of integers and a number, write a functiion called maxSubarraySum.
// finds the max sum of a subarray with the length of the number passed to the function.

// INPUTS: ARRAY AND INT
// OUTPUT: max sum int

// Brute Force Approach
// function maxSubarraySum(arr, int) {
//   let tempSum = 0;
//   let maxSum = -Infinity;
//   if (int > arr.length) {
//     return null;
//   }

//   for (let i = 0; i <= arr.length - int; i++) {
//     tempSum = 0;
//     for (let j = 0; j < int; j++) {
//       tempSum = tempSum + arr[i + j];
//     }
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([1, 4, 7, 20, 5, 3, 5, 35], 1));

// Sliding Window approach
function maxSubarraySum(arr, int) {
  let maxSum = -Infinity;
  let tempSum = 0;
  for (let i = 0; i < int; i++) {
    tempSum = tempSum + arr[i];
  }

  for (let j = 0; j < arr.length - int; j++) {
    tempSum = tempSum + arr[j + int] - arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 4, 7, 20, 5, 3, 5, 14, 35], 1));
