// MULTIPLE POINTER PATTERN.
// CREATE POINTERS OR VALUES THAT CORRESPOND TO POSITION.
// WE USE THIS TO INCREASE EFFICIENCIES WITH MINIMAL SPACE COMPLEXITY

// NAIVE APPROACH.
// TIME COMPLEXITY: O(N^2)
// SPACE COMPLEXITY: O(1)
function sumZero(arr) {
  for (item of arr) {
    for (nextItem of arr) {
      if (item + nextItem === 0) {
        return [item, nextItem];
      }
    }
  }
}

// MULTIPLE POINTER APROACH
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: I(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right = right - 1;
    } else {
      left++;
    }
  }
}
