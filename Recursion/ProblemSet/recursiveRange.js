// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21 (0+1+2+3+4+5+6=21)
// recursiveRange(10) // 55

// function recursiveRange(num) {
//   let total = num;

//   function helper(helperInput) {
//     if (helperInput === 0) return;
//     total = total + helperInput - 1;
//     helper(helperInput - 1);
//   }
//   helper(num);
//   return total;
// }

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(4));
