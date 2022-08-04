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