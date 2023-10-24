/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function(s) {
  if (s === ' ') {
      return true;
  }
  const punctuation = /[^a-zA-Z0-9 :]/g;
  s = s.toLowerCase();
  s = s.replaceAll(punctuation,'');
  // s = s.replaceAll(' ', '');
  console.log('s', s);
  let split = s.split('');
  console.log('split', split);
  let rev = split.reverse().join('');
  console.log('rev', rev);
  if (rev === s) {
      return true;
  } else {
      return false;
  }
};

console.log(isPalindrome('race a car')); //false
console.log(isPalindrome("`l;`` 1o1 ??;l`")); // true