// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function productOfArray(arr) {
//   let product = 1;
//   function helper(helperInput) {
//     if (helperInput.length === 0) return;
//     product = product * helperInput[0];
//     helper(helperInput.slice(1));
//   }
//   helper(arr);
//   return product;
// }

// function productOfArray(arr) {
//   if (arr.length === 1) return arr[0];
//   let mult = arr[0] * arr[1];
//   arr.splice(1, 1, mult);
//   return productOfArray(arr.slice(1));
// }

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 5]));
