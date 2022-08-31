<?php
/*
Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]

There are two subarrays meeting the criterion:  and . The maximum length subarray has 5 elements.
*/
function picking_numbers($a) {
  $a = array_map(null, $a);
  $map = array_fill(0, 101, 0);
  for ($i = 0; $i < count($a); $i++) {
    $map[$a[$i]]++;
  }
  var_dump($map);
  $max = 0;
  for ($j = 1; $j < count($map); $j++) {
    if ($map[$j] + $map[$j - 1] > $max) {
      $max = $map[$j] + $map[$j - 1];
    }
  }
  var_dump($max);
  return $max;
}

picking_numbers([4, 6, 5, 3, 3, 1]);
picking_numbers([1, 2, 2, 3, 1, 2]);