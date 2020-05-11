// SLOW WAY -> n^2
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
  str1 = str1.split("");
  str2 = str2.split("");
  // check length of each string
  if (str1.length !== str2.length) {
    return false;
  }

  // check count of chars in each string
  for (char1 of str1) {
    for (char2 of str2) {
      if (char1 === char2) {
        let index = str2.indexOf(char1);
        str2.splice(index, 1);
        continue;
      }
    }
  }
  if (str2.length !== 0) {
    return false;
  }

  // return boolean
  return true;
}

console.log(validAnagram("test", "bad"));
