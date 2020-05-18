// IMPLEMENT A FUNCTION CALLED areThereDuplicates which accepts
// a variable number of arguments and checks whether there are
// any duplicates among the arguments passed in. use frequency counter,
// or multiple pointers pattern

// INPUTS: variable number of arguments
// OUPUT: boolean
// QUESTIONS: can the inputs be objects or arrays? are they all the same type?

// frequency counter first
function areThereDuplicates(...args) {
  let obj1 = {};

  for (const item of args) {
    if (obj1[item]) {
      return true;
    } else {
      obj1[item] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates("a", "b", 5, 7, 2));

// multiple pointer pattern
// ONLY WORKS IF ALL THE SAME DATA TYPE
// function areThereDuplicates(...args) {
// //SORT ARRAY OF ARGS
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// console.log(areThereDuplicates("a", "c", "b"));
