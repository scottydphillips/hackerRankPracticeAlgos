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