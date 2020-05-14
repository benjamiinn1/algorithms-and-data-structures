// SLIDING WINDOW PATTERN.
// CREATE A SLIDING WINDOW CORRESPONDS TO A SELECTION IN AN ARRAY.
// WE USE THIS TO INCREASE EFFICIENCIES WITH MINIMAL SPACE COMPLEXITY

// NAIVE APPROACH.
// TIME COMPLEXITY: O(N^2)
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) return null;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

// console.log(maxSubarraySum([1, 2, 6, 8, 5, 4, 2, 2, 6, 8, 3, 10, 11, 1], 2));

// SLIDING WINDOW APPROACH
// TIME COMPLEXITY: O(N)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 6, 8, 5, 4, 2, 2, 6, 8, 3, 10, 11, 1], 2));
