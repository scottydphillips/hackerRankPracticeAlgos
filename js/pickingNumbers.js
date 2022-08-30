/*
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion:  and . The maximum length subarray has 5 elements.
*/

pickingNumbers = (a) => {
  a = a.map(Number);
  console.log('a', a);
  let map = new Array(100);
  map.fill(0);
  for (let i = 0; i < a.length; i++) {
    map[a[i]]++;
  }
  console.log('map', map);
  let max = 0;
  for (let j = 1; j < map.length; j++) {
    if (map[j] + map[j - 1] > max) {
      max = map[j] + map[j - 1];
    }
  }
  console.log('max', max);
  return max;
}

console.log('testCase0', pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log('testCase1', pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log('testCase2', pickingNumbers([98, 3, 99, 1, 97, 2]));
console.log('testCase5', pickingNumbers([7, 12, 13, 19, 17, 7, 3, 18, 9, 18, 13, 12, 3, 13, 7, 9, 18, 9, 18, 9, 13, 18, 13, 13, 18, 18, 17, 17, 13, 3, 12, 13, 19, 17, 19, 12, 18, 13, 7, 3, 3, 12, 7, 13, 7, 3, 17, 9, 13, 13, 13, 12, 18, 18, 9, 7, 19, 17, 13, 18, 19, 9, 18, 18, 18, 19, 17, 7, 12, 3, 13, 19, 12, 3, 9, 17, 13, 19, 12, 18, 13, 18, 18, 18, 17, 13, 3, 18, 19, 7, 12, 9, 18, 3, 13, 13, 9, 7]))
console.log('testCase3', pickingNumbers([4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1, 1, 9, 2, 4]))