<?php 
/*
Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.
Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

Example
a = 24
b = 49

There are three square integers in the range: 25, 36 and 49. Return 3.
*/

function sherlock_and_squares($a, $b) {
  $count = 0;
  while ($a <= $b) {
    $sqrt = sqrt($a);
    print_r('sqrt ' . $sqrt . "\n");
    if (is_whole_number($sqrt)) {
      print_r('pants');
      $count++;
    }
    $a++;
    print_r('a ' . $a . "\n");
  }
  return $count;
}
function is_whole_number($n) {
  return is_numeric($n) && floor($n) == $n;
}

print_r('testCase0 ' . sherlock_and_squares(3, 9) . "\n");
print_r('testCase1 ' . sherlock_and_squares(17, 24) . "\n");

