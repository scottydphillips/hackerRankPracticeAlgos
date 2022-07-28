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