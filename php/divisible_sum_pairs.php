<?php 
/*
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4,6].
*/

function divisible_sum_pairs($n, $k, $ar) {
  $num_of_pairs = 0;
  for ($i = 0; $i < count($ar); $i++) {
    $current = $ar[$i];
    $sum = 0;
    print_r('RESET =============');
    print_r('current ' . $current);
    for ($j = ($i + 1); $j < count($ar); $j++) {
      $sum = $current + $ar[$j];
      print_r('i + j ' . $current . ' + ' . $j);
      print_r('sum ' . $sum);
      if ($sum % $k === 0) {
        $num_of_pairs++;
        print_r('num_of_pairs ' . $num_of_pairs);
      }
    }
  } 
  print_r('return ' . $num_of_pairs);
  return $num_of_pairs;
}

divisible_sum_pairs(6, 3, [1, 3, 2, 6, 1, 2]);