// Given an array of integers and a number, write a functiion called maxSubarraySum.
// finds the max sum of a subarray with the length of the number passed to the function.

// INPUTS: ARRAY AND INT
// OUTPUT: max sum int

function maxSubarraySum(arr, int) {
  if (int > arr.length) return null;
  // set pointer
  let pointer2 = 1;
  let tempSum;
  // create a max sum
  let maxSum = arr[0];
  while (pointer2 < int) {
    maxSum = maxSum + arr[pointer2];
    pointer2++;
  }
  tempSum = maxSum;
  console.log(tempSum);
  for (let i = int; i < arr.length; i++) {
    tempSum = tempSum - arr[i - int] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 5], 3));
