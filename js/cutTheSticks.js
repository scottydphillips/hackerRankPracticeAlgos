/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
*/

cutTheSticks = (arr) => {
  let holdingArray = [arr.length];
  let filtered = arr.sort((a, b) => a - b);
  while (filtered.length > 1) {
    let mapped = filtered.map((i) => i - filtered[0]);
    console.log('mapped', mapped);
    filtered = mapped.filter((i) => i > 0);
    console.log('filtered', filtered);
    if (filtered.length) holdingArray.push(filtered.length);
    console.log('holdingArray', holdingArray);
  }
  console.log('return', holdingArray);
  return holdingArray;
}

console.log('testCase0', cutTheSticks([5, 4, 4, 2, 2, 8]));
console.log('testCase1', cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
console.log('testCase2', cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]));
console.log('testCase4', cutTheSticks([23, 74, 26, 23, 92, 92, 44, 13, 34, 23, 69, 4, 19, 94, 94, 38, 14, 9, 51, 98, 72, 46, 17, 25, 21, 87, 99, 50, 59, 53, 82, 24, 93, 16, 88, 52, 14, 38, 27, 7, 18, 81, 13, 75, 80, 11, 29, 39, 37, 78, 55, 17, 78, 12, 77, 84, 63, 29, 68, 32, 17, 55, 31, 30, 3, 17, 99, 6, 45, 81, 75, 31, 50, 93, 66, 98, 94, 59, 68, 30, 98, 57, 83, 75, 68, 85, 98, 76, 91, 23, 53, 42, 72, 77]));
