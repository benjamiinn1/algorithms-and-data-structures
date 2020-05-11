// THIS IS A BETTER SOLUTION. 3 loops but no nested loops 3n == n which is better than n^2
// write a function called 'same' which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// Reword question
// take two arrays and compare them. If second array has square of every value in first array return true.
// inputs: two arrays
// outputs: boolean

function same(array1, array2) {
  // check to see if array1 and 2 are same length, if not, return false
  if (array1.length !== array2.length) {
    return false;
  }
  // Build an object for each array. use the values in the arrays as keys and the count as values
  let obj1 = {};
  let obj2 = {};
  for (element of array1) {
    if (obj1[element]) {
      obj1[element] = obj1[element] + 1;
    } else {
      obj1[element] = 1;
    }
  }
  for (element of array2) {
    if (obj2[element]) {
      obj2[element] = obj2[element] + 1;
    } else {
      obj2[element] = 1;
    }
  }
  // loop through object1 and see if key^2  is in object2 and values are equal
  for (key in obj1) {
    // if key^2 is not in obj2, return false
    // if (!(key ** 2 in obj2)) {
    //   return false;
    // }
    // if the count of key^2 is not the same as count of key, return false
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  // return boolean
  return true;
}

console.log(same([2, 4, 5], [4, 16, 26]));
