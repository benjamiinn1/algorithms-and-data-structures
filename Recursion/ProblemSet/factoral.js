// write a function factorial which accepts a number and returns the factorial of that number.
// input: int
// output int

function factorial(num) {
  // BASE
  if (num === 0) return 1;
  if (num === 1) return num;

  return num * factorial(num - 1);
}

console.log(factorial(2));
