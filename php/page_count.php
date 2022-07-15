<?php function page_count($n, $p) {
  $halfway_point = $n / 2;
  if ($p > 1 && $p < $halfway_point) {
    print_r(floor($p / 2));
    return floor($p / 2);
  } elseif ($p < $n && ($n - $p) > 1 && $p > $halfway_point) {
    print_r(floor($n - $p) / 2);
    return floor(($n - $p) / 2);
  } else {
    if ($n > 2) {
      if ($p % 2 != 0 && $n % 2 === 0) {
        print_r(1);
        return 1;
      }
    }
    print_r(0);
    return 0;
  }
}

page_count(6, 2);
page_count(5, 4);
page_count(6, 3);
page_count(6, 5);
page_count(2, 1);