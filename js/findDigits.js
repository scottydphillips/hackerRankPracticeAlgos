findDigits = (n) => {
  let multipleCount = 0;
  let split = Array.from(String(n), Number);
  console.log('split', split);
  for (let multiple of split) {
    if (multiple === 0) {
      continue;
    }
    if (n % multiple === 0) {
      multipleCount++;
    }
  }
  console.log('return', multipleCount);
  return multipleCount;
}

console.log('testCase0', findDigits(124));
console.log('testCase1', findDigits(111));
console.log('testCase2', findDigits(10));
console.log('testCase3', findDigits(1012));