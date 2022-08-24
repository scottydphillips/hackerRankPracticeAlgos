/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
*/

sockMerchant = (n, ar) => {
  ar.sort();
  let res = 0;
  let i = 0;
  console.log('ar', ar);
  while (i < n) {
    let current = ar[i];
    let count = 1;
    i++;
    console.log('i', i);
    console.log('count', count);
    while (i < n && ar[i] === current) {
      count++;
      i++;
      console.log('i', i);
      console.log('count', count);
    }
    if (count >= 2) {
      res = res + Math.floor(count / 2);
      console.log('res', res);
    }
  }
  console.log('return', res);
  return res;
}

console.log('testCase0', sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));