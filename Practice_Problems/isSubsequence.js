// write a function called isSubsequence which taks two strings.
// checks whether characters in first string form a subsequence
// of characters in the second string.
// check to see if a set of characters are in the same order in a second string

// INPUTS: two strings
// OUTPUT: boolean

function isSubsequence(str1, str2) {
  let next = 0;
  let str1Next = 0;
  if (!str1) return true;
  if (str1.length > str2.length) return false;
  while (next < str2.length) {
    if (str2[next] === str1[str1Next]) {
      str1Next++;
      next++;
    } else next++;
  }
  if (str1Next === str1.length) return true;
  else return false;
}

console.log(isSubsequence("hello", "hell wortld"));
