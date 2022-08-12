chocolateFeast = (n, c, m) => {
  let chocolateBars = Math.floor(n / c);
  console.log('chocolateBars', chocolateBars);
  console.log('chocolateBars - 1', chocolateBars - 1);
  console.log('m - 1', m - 1);
  console.log('(chocolateBars - 1 / m - 1)', Math.floor((chocolateBars - 1) / (m - 1)));
  chocolateBars += Math.floor((chocolateBars - 1) / (m - 1));
  return chocolateBars;
}

console.log('testCase0', chocolateFeast(10, 2, 5));
console.log('testCase1', chocolateFeast(12, 4, 4));
console.log('testCase2', chocolateFeast(6, 2, 2));
console.log('testCase3', chocolateFeast(19150, 99, 2945));