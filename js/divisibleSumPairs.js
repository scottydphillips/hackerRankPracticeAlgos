/*
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4,6].
*/

divisibleSumPairs = (n, k, ar) => {
  let numOfPairs = 0;
  for (let i = 0; i < ar.length; i++) {
    let current = ar[i];
    let sum = 0;
    console.log('RESET ====================');
    console.log('current', current);
    for (let j = (i + 1); j < ar.length; j++) {
      sum = current + ar[j];
      console.log('i + j', `${current} + ${ar[j]}`);
      console.log('sum', sum);
      if (sum % k === 0) {
        numOfPairs++;
        console.log('numOfPairs', numOfPairs);
      }
    }
  } 
  console.log('return', numOfPairs);
  return numOfPairs;
}

console.log('testCase0', divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));