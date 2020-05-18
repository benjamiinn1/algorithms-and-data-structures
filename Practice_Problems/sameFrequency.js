// WRITE A FUNCTION CALLED sameFrequency. GIVEN TWO POSITIVE INTEGERS.
// FIND OUT IF THE TWO NUMBERS HAVE THE SAME FREQUENCY OF DIGITS

// INPUTS: TWO INTEGERS
// OUTPUTS: BOOLEAN

// // O(N^2)
// function sameFrequency(int1, int2) {
//   // build an array of each input
//   let arr1 = int1.toString().split("");
//   let arr2 = int2.toString().split("");

//   // check each array length, if not equal, return FALSE
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   // loop through first array, removing the element from the second array if it is there
//   for (const digit of arr1) {
//     if (arr2.includes(digit)) {
//       let index = arr2.indexOf(digit);
//       arr2.splice(index, 1);
//     }
//   }

//   if (arr2.length !== 0) {
//     return false;
//   }
//   // return true if arr2.length = 0
//   return true;
// }

// console.log(sameFrequency(122345, 125343));

// O(N)
function sameFrequency(int1, int2) {
  const arr1 = int1.toString().split("");
  const arr2 = int2.toString().split("");

  // check each arr length, if not equal, return FALSE
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  // set obj1 key to each digit, set value to count
  for (const char of arr1) {
    if (!obj1[char]) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    }
  }

  // set obj2 key to each digit, set value to count
  for (const char of arr2) {
    if (!obj2[char]) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    }
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(2223, 2233));
