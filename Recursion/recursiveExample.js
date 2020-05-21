// THIS IS A SIMPLE EXAMPLE OF WHAT RECURSION IS
// WE ARE COUNTING DOWN FROM A NUMBER TO 0
function countDown(num) {
  // THIS IS THE BASE CASE
  if (num <= 0) {
    console.log("done");
    return;
  }
  console.log(num);
  num--;
  // HERE WE ARE CALLING COUNT DOWN WITH A DIFFERENT INPUT
  countDown(num);
}

// countDown(10);

// THIS is num + num-1 + num - 2... until num===1
function sumRange(num) {
  // THIS IS THE BASE CASE
  if (num === 1) return 1;
  // THIS IS WHERE WE ARE CALLING WITH A DIFFERENT INPUT
  return num + sumRange(num - 1);
}

// console.log(sumRange(5));

// THIS IS num!
function factorial(num) {
  // BASE CASE
  if (num === 1) return 1;
  // different input
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// EXAMPLE IS TO COLLECT ALL ODD VALUES IN AN ARRAY
// THIS EXAPMLE HAS A HELPER
// TYPICALLY USE A HELPER IF YOU NEED TO STORE SOMETHING EXTERNALLY
function collectOddValues(arr) {
  let oddNums = [];

  function helper(helperInput) {
    // THIS IS THE BASE CASE
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      oddNums.push(helperInput[0]);
    }
    // CALL HELPER WITH A NEW INPUT
    helper(helperInput.slice(1));
  }
  helper(arr);
  return oddNums;
}

// console.log(collectOddValues([1, 4, 6, 2, 3, 7, 3, 4]));

// PURE RECURSION: DOES NOT USE A HELPER METHOD
function collectOddValuesPure(arr) {
  let newArr = [];

  // BASE CASE
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // CALL FUNCTION WITH DIFFERENT INPUT AND BUILD ODD ARRAY EACH CALL
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}

console.log(collectOddValuesPure([1, 5, 4, 2, 7, 3, 6, 5]));
