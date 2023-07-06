<?php
/*

*/

function flatland_space_stations($n, $c) {
  $distances = array();
  $distance_array = array();
  for ($i = 0; $i < $n; $i++) {
    $distances[$i] = array();
    foreach ($c as $dist) {
      array_push($distances[$i], abs($i - $dist));
    }
    $values = array_values($distances[$i]);
    array_push($distance_array, min($values));
  }
  print_r('return: ');
  var_dump(max($distance_array));
  return max($distance_array);
}

flatland_space_stations(5, [0, 4]);
flatland_space_stations(6, [0, 1, 2, 3, 4, 5]);
flatland_space_stations(20, [13, 1, 11, 10, 6]);