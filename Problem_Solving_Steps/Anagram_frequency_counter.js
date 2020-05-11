// Frequency Counter Method
// STEP 1: WHAT IS THE QUESTION
// WRITE A FUNCTION THAT TAKES TWO STRINGS AND COMPARES THEM. IF THE COUNT OF EACH CHAR IN THE STRINGS ARE THE SAME, RETURN TRUE
// INPUTS: two strings
// OUTPUT: boolean

// STEP 2: CONCRETE EXAMPLES
// ('hello', 'elhol') === true
// ('le', 'el') === true
// ('bad', 'test') === false
// ('test', 'testt') === false

function validAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  // check length of each string
  if (str1.length !== str2.length) {
    return false;
  }

  // loop through and build an object: key = char value = count
  for (let char of str1) {
    if (obj1[char]) {
      obj1[char] = obj1[char] + 1;
    } else {
      obj1[char] = 1;
    }
  }
  for (let char of str2) {
    if (obj2[char]) {
      obj2[char] = obj2[char] + 1;
    } else {
      obj2[char] = 1;
    }
  }

  // return boolean
  for (let key in obj1) {
    if (!(obj1[key] === obj2[key])) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("test", "tset"));
