// write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence

// 1,1,2,3,5,8

function fib(num) {
  let pointer1 = 0;
  let pointer2 = 1;
  let counter = num;
  let total = 0;

  function helper(helperInput) {
    if (helperInput === 1) return;
    total = pointer1 + pointer2;
    pointer1 = pointer2;
    pointer2 = total;
    helper(helperInput - 1);
  }
  helper(counter);
  return total;
}

// THIS IS THE ANSWER SOLUTION. WILL LOOK BACK TO UNDERSTAND THIS ONE
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(5));
