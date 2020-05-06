// O(1) space
// TOTAL = 1 number
// POSITION = 1 number
// since there are only two variables this is constant. We are not creating vars inside loop
const add = (arr) => {
  let total = 0;
  for (let position = 0; position < arr.length; position++) {
    total += arr[position];
  }
  return total;
};

// O(n) space
// DOUBLEARR = array
// INSIDE LOOP DOUBLEARR GROWS AS ARR GROWS
const timesTwo = (arr) => {
  let doubleArr = [];
  for (let position = 0; position < arr.length; position++) {
    doubleArr.push(2 * arr[position]);
  }
  return doubleArr;
};
