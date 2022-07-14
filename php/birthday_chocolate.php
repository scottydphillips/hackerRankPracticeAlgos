<?php function birthday_chocolate($s, $d, $m) {
  $total = 0;
  $qualifying_segments = 0;
  for ($i = 0; $i < count($s); $i++) {
    print_r('reset ==============');
    print_r('i' . $i);
    $total = 0;
    for ($j = $i; $j < ($i + $m); $j++) {
      print_r('j' . $j);
      $total = $s[$j] + $total;
      print_r('total' . $total);
      if ($total === $d && $j === (($i + $m)) - 1) {
        $qualifying_segments++;
        print_r('qualifying_segments' . $qualifying_segments);
      }
    }
  }
  print_r('return' . $qualifying_segments);
  return $qualifying_segments;
}