// WRITE A FUNCTION WHICH ACCEPTS A BASE AND AN EXPONENT. THE FUNCTION SHOULD RETURN THE POWER OF THE BASE TO THE EXPONENT. THIS FUNCTION SHOULD RETURN THE SAME THING AS MATH.pow()

// INPUT: BASE AND EXPONENT (BOTH INT)
// OUTPUT: INT

function power(base, exponent) {
  // THIS WILL MULTIPLY BASE BY 1
  if (exponent === 0) return 1;

  // recursivly multiply by base until the exponent number is reached
  return base * power(base, exponent - 1);
}

console.log(power(5, 3));
