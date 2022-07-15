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