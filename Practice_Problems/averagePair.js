// write a function called averagePair. Given a sorted array of integers and a target avg,
// determine if there is a pair of values in the array where the average of the pair
// equals the target avg. There may be more than one pair that matches the avg target.

// INPUT: sorted array of ints, target avg
// OUTPUT: boolean

function averagePair(arr, avg) {
  // set pointers
  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let slideAvg = (arr[pointer1] + arr[pointer2]) / 2;
    // if slidingAvg and avg are equal then return true
    if (slideAvg === avg) return true;
    // check if avg is larger or smaller than slidingAvg
    // if slidingAvg is larger than avg, move to next smallest number
    else if (slideAvg < avg) pointer1++;
    // if slidingAvg is smaller than avg, move to next largest number
    else pointer2--;
  }
  // return false if they do not create the desired avg
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
