/*
An integer d is a divisor of an integer n if the remainder of n / d = 0 .
Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
Example:
n = 124
Check whether 1, 2, and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.
n = 111
Check whether 1, 1, 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.
n = 10
Check whether 1 and 0 are divisors of 10. 1 is but 0 is not. Return 1.
*/

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