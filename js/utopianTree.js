/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

For example, if the number of growth cycles is n = 5, the calculations are as follows:
Period  Height
0       1
1       2
2       3
3       6
4       7
5       14
*/

utopianTree = (n) => {
  let height = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      height = height * 2;
    } else {
      height++;
    }
  }
  console.log('return', height);
  return height;
}

console.log('testCase0', utopianTree(0));
console.log('testCase1', utopianTree(1));
console.log('testCase2', utopianTree(4));