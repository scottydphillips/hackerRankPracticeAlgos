<?php function service_lane($n, $width, $cases) {
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