<?php 
/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n = 7
ar = [1, 2, 1, 2, 1, 3, 2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
*/

function sock_merchant($n, $ar) {
  sort($ar);
  $res = 0;
  $i = 0;
  print_r($ar);
  while ($i < $n) {
    $current = $ar[$i];
    $count = 1;
    $i++;
    print_r('i '. $i . ' ');
    print_r('count ' . $count . ' ');
    while ($i < $n && $ar[$i] === $current) {
      $count++;
      $i++;
      print_r('i ' . $i . ' ');
      print_r('count '. $count . ' ');
    }
    if ($count >= 2) {
      $res = $res + floor($count / 2);
      print_r('res ' . $res . ' ');
    }
  }
  print_r('return ' . $res . ' ');
  return $res;
}

sock_merchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);