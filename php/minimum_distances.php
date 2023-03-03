<?php
/*
The distance between two array values is the number of indices between them. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.
*/

function minimum_distances($a) {
  $map = array();
  foreach($a as $val) {
    if (isset($map[$val])) {
      $map[$val]++;
    } else {
      $map[$val] = 1;
    }
  }
  var_dump($map);
  $dupeArray = array();
  foreach($map as $key=>$val) {
    if ($val > 1) {
      $first = array_search($key, $a);
      var_dump($first);
      $second = array_search($key, array_reverse($a, true));
      var_dump($second);
      array_push($dupeArray, abs($first - $second));
    }
  }
  if (count($dupeArray) < 1) {
    return -1;
  } else {
    return min($dupeArray);
  }
}

minimum_distances([3, 2, 1, 2, 3]);
minimum_distances([7, 1, 3, 4, 1, 7]);