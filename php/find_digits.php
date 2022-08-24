<?php 
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

function find_digits($n) {
  $multiple_count = 0;
  $split = array_map('intval', str_split($n));
  foreach($split as $multiple) {
    if ($multiple === 0) {
      continue;
    }
    if ($n % $multiple === 0) {
      $multiple_count++;
    }
  }
  return $multiple_count;
}

print_r('test_case_0 ' . find_digits(124) . "\n");
print_r('test_case_1 ' . find_digits(111) . "\n");
print_r('test_case_2 ' . find_digits(10) . "\n");
print_r('test_case_3 ' . find_digits(1012) . "\n");