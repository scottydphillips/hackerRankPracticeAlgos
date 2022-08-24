/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.
Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.
*/

sherlockAndSquares = (a, b) => {
  let count = 0;
  const lower = Math.ceil(Math.sqrt(a));
  const higher = Math.floor(Math.sqrt(b));

  if (lower > higher) {
    return 0;
  }

  for (let i = lower; i <= higher; i++) {
    if (lower <= i * i <= higher) {
      count++;
    }
  }
  return count;
}

console.log('testCase0', sherlockAndSquares(3, 9));
console.log('testCase1', sherlockAndSquares(17, 24));