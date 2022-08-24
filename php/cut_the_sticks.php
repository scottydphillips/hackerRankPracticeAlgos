<?php
/*
You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.
Given the lengths of n sticks, print the number of sticks that are left before each iteration until there are none left.
*/

function cut_the_sticks($arr) {
  $holding_array = [count($arr)];
  var_dump($holding_array);
  sort($arr, $flags = SORT_NUMERIC);
  var_dump($arr);
  while (count($arr) > 1) {
    $mapped = array_map(function($i) use($arr) {
      return $i - $arr[0];
    }, $arr);
    var_dump($mapped);
    $arr = array_filter($mapped);
    $arr = array_values($arr);
    var_dump($arr);
    if (count($arr) > 0) array_push($holding_array, count($arr));
  }
  var_dump($holding_array);
  return $holding_array;
}

print_r('test_case_0 ' . cut_the_sticks([5, 4, 4, 2, 2, 8]) . "\n");
print_r('test_case_1 ' . cut_the_sticks([1, 2, 3, 4, 3, 3, 2, 1]) . "\n");
print_r('test_case_2 ' . cut_the_sticks([8, 8, 14, 10, 3, 4, 14, 12]) . "\n");
print_r('testCase4 ' . cut_the_sticks([23, 74, 26, 23, 92, 92, 44, 13, 34, 23, 69, 4, 19, 94, 94, 38, 14, 9, 51, 98, 72, 46, 17, 25, 21, 87, 99, 50, 59, 53, 82, 24, 93, 16, 88, 52, 14, 38, 27, 7, 18, 81, 13, 75, 80, 11, 29, 39, 37, 78, 55, 17, 78, 12, 77, 84, 63, 29, 68, 32, 17, 55, 31, 30, 3, 17, 99, 6, 45, 81, 75, 31, 50, 93, 66, 98, 94, 59, 68, 30, 98, 57, 83, 75, 68, 85, 98, 76, 91, 23, 53, 42, 72, 77]));
