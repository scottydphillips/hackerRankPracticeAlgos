<?php
/* 
A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.
You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.
*/
function service_lane($n, $width, $cases) {
  $holding_array = [];
  foreach ($cases as $c) {
    $a = $c[0];
    $b = $c[1];
    $min = $width[$a];
    for ($a; $a <= $b; $a++) {
      $current = $width[$a];
      if ($min > $current) {
        $min = $current;
      }
    }
    array_push($holding_array, $min);
  }
  return $holding_array;
}

print_r('testCase0 ' . service_lane(8, [2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));