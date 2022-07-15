pageCount = (n, p) => {
  let halfwayPoint = n / 2;
  console.log('halfwayPoint', halfwayPoint);
  if (p > 1 && p < halfwayPoint) {
    console.log('if', Math.floor(p/2));
    return Math.floor(p / 2);
  } else if (p < n && (n - p) > 1 && p > halfwayPoint) {
    console.log('else if', Math.floor((n-p)/2));
    return Math.floor((n - p) / 2);
  } else {
    if (n > 2) {
      if (p % 2 !== 0 & n % 2 === 0) {
        return 1;
      }
    }
    return 0;
  }
}

console.log('testCase0', pageCount(6, 2));
console.log('testCase1', pageCount(5, 4));
console.log('testCase9', pageCount(6, 3));
console.log('testCase26', pageCount(6, 5));
console.log('customTest', pageCount(100, 99));
console.log('testCase6', pageCount(2, 1));