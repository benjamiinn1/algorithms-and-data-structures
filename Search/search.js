// There are many different sorting algorithms.

// Linear Search: going 1 by 1 starting at the begining or end and moving the other direction, checking every item in list until end.
// - accepts an array and value
// - loop through entire array and check if value is equal to current element of the array
// - if it is, return index at which element is found
// - if value is never found, return -1
function linearSearch(arr, val) {
  for (const item in arr) {
    if (arr[item] === val) return Number(item);
  }
  return -1;
}

console.log(linearSearch([1, 5, 2, 7, 2, 5, 3, 9], 7));
