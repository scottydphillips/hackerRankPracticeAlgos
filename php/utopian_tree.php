<?php 
/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

For example, if the number of growth cycles is n = 5, the calculations are as follows:
Period  Height
0       1
1       2
2       3
3       6
4       7
5       14
*/

function utopian_tree($n) {
  $height = 1;
  for ($i = 0; $i < $n; $i++) {
    if ($i % 2 === 0) {
      $height = $height * 2;
    } else {
      $height++;
    }
  }
  print_r('height' . $height . "\n");
  return $height;
}

print_r('testCase0 ' . utopian_tree(0) . "\n");
print_r('testCase1 ' . utopian_tree(1) . "\n");
print_r('testCase2 ' . utopian_tree(4) . "\n");