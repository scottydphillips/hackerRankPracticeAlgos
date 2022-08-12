<?php function chocolate_feast($n, $c, $m) {
  $chocolate_bars = floor($n / $c);
  $chocolate_bars = $chocolate_bars + floor(($chocolate_bars - 1) / ($m - 1));
  return $chocolate_bars;
}

print_r(chocolate_feast(10, 2, 5));
print_r(chocolate_feast(12, 4, 4));
print_r(chocolate_feast(6, 2, 2));