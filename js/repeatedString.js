/*
There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.

Example
s = 'abcac'
n =  10

The substring we consider is abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.
*/

function repeatedString(s, n) {
  const fullRepetitions = Math.floor(n / s.length);
  const remainingChars = n % s.length;
  let aCount = 0;

  for(let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      aCount++
    }
  }

  let aTotal = fullRepetitions * aCount;

  for(let i = 0; i < remainingChars; i++) {
    if (s[i] === 'a') {
      aTotal++;
    }
  }
  
  return aTotal;
}

console.log('testCase0', repeatedString('abcac', 10)); // 4
console.log('testCase1', repeatedString('aba', 10)); // 7
console.log('testCase2', repeatedString('a', 1000000000000)); // 1000000000000