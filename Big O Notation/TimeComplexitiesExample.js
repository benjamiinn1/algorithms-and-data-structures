// O(n)
// THIS EXAMPLE IS LINEAR, TIME GETS LONGER THE LARGER n GETS
const addUp = (n) => {
  let total = 0;
  for (let counter = 0; counter < n; counter++) {
    total += 1;
  }
  return total;
};

// O(1)
// THIS EXAMPLE IS CONSTANT THERE IS ONE OPERATION ALWAYS (THIS IS MUCH BETTER)
const addUp = (n) => {
  return (n * (n + 1)) / 2;
};

// O(n^2)
// THIS EXAMPLE IS QUADRATIC. IT GROWS EXPONENTIALLY
const logTwo = (n) => {
  for (let first = 0; first < n; first++) {
    for (let second = 0; second < n; second++) {
      console.log(first, second);
    }
  }
};
