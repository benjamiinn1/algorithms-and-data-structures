// IMPLEMENT A FUNCTION CALLED countUniqueValues to count unique values in the array.
// INPUTS: sorted array
// OUTPUT: unique values in array.
// accepts negative numbers, 0, and positive numbers.
// ARRAY WILL ALWAYS BE SORTED

// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY O(1)
function countUniqueValues(arr) {
  let pointer1 = 0;
  let pointer2 = 1;
  if (arr.length === 0) {
    return pointer1;
  }
  while (pointer2 < arr.length) {
    if (arr[pointer2] === arr[pointer1]) {
      pointer2++;
    } else {
      pointer1++;
      arr[pointer1] = arr[pointer2];
    }
  }
  console.log(arr);
  return pointer1 + 1;
}

console.log(countUniqueValues([2, 2, 4, 5, 5, 6, 8, 10]));
