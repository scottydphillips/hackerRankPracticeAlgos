<?php
/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/

function birthday_chocolate($s, $d, $m) {
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