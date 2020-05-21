// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// INPUTS: string, string
// OUTPUT: string

function minWindow(s, t) {
  // check edgecase

  let pointer1 = 0;

  let placement = [];

  // create a window
  let obj1 = {};
  for (char of t) {
    if (obj1[char]) {
      obj1[char] = obj1[char] + 1;
    } else {
      obj1[char] = 1;
    }
  }

  for (char of s) {
    if (obj1[char]) {
      placement.push(pointer1);
      if (obj1[char] === 1) {
        delete obj1[char];
      } else {
        obj1[char] = obj1[char] - 1;
      }
    }
    pointer1++;
  }

  if (Object.keys(obj1).length > 0) return "";

  // return string

  let minLength = placement[t.length - 1] - placement[0];
  let windowLeft = 0;
  let windowRight = minLength;
  console.log(windowLeft, windowRight);
  while(windowRight < s.length){
    if(s[windowLeft + 1])
  }
}

console.log(minWindow("tommytmmy", "tym"));
