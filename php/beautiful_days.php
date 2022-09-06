<?php
/* 
Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

Given a range of numbered days, [i...j] and a number k, determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where |i-reverse(i)| is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Return the number of beautiful days in the range.
*/

function beautiful_days($i, $j, $k) {
  $beautiful_day_count = 0;
  for ($i; $i <= $j; $i++) {
    print('i ' . $i . "\n");
    $reverse = strval($i);
    $reverse = strrev($reverse);
    print_r('reverse ' . $reverse . "\n");
    $reverse = intval($reverse);
    $difference = abs($i - $reverse);
    print_r('difference ' . $difference . "\n");
    if (is_int($difference / $k)) $beautiful_day_count++;
  }
  print_r('return ' . $beautiful_day_count . "\n");
  return $beautiful_day_count;
}

beautiful_days(20, 23, 6);