<?php
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

function is_palindrome($s) {
  if ($s === ' ') {
    return true;
  }
  $regex = '/[^a-zA-Z0-9:]/i';
  $s = strtolower($s);
  $s = str_replace(' ', '', $s);
  $s = preg_replace($regex, '', $s);
  $s = str_replace(':', '', $s);
  $split = str_split($s);
  $rev = array_reverse($split);
  $rev = implode('', $rev);
  if ($rev === $s) {
    return true;
  } else {
    return false;
  }
}

is_palindrome('race a car'); // false
is_palindrome("`l;`` 1o1 ??;l`"); // true