// THIS IS A NAIVE WAY BECAUSE ITS NOT THE BEST WAY. NESTED LOOPS n^2
// write a function called 'same' which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// STEP 1: Reword question
// take two arrays and compare them. If second array has square of every value in first array return true.
// inputs: two arrays
// outputs: boolean

function same(array1, array2) {
  // create an array to hold values
  let trueSquare = [];
  // Simple error checking
  if (array1.length !== array2.length) {
    return false;
  }
  // loop through both arrays, determine if squared value is in second array.
  for (element of array1) {
    for (squareElement of array2) {
      if (element * element === squareElement) {
        let index = array2.indexOf(squareElement);
        trueSquare.push(element);
        array2.splice(index, 1);
        continue;
      }
    }
  }

  // return boolean
  if (trueSquare.length === array1.length && array2.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(same([1, 4, 5, 6, 5], [1, 16, 25, 36, 25]));
