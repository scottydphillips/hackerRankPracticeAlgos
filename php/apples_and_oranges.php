<?php function count_apples_and_oranges($s, $t, $a, $b, $apples, $oranges) {
  $apple_count = 0;
  $orange_count = 0;
  foreach($apples as $apple) {
    if ($apple + $a >= $s && $apple + $a <= $t) {
      $apple_count++;
    }
  }
  foreach ($oranges as $orange) {
    if ($orange + $b <= $t && $orange + $b >= $s) {
      $orange_count++;
    }
  }
  echo $apple_count . "\n" . $orange_count;
}