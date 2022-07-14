<?php function birthday_cake_candles($candles) {
  $count = 0;
  $tallest = max(...$candles);
  print_r($tallest);
  foreach($candles as $candle) {
    if ($candle === $tallest) {
      $count++;
    }
  }
  print_r('count' . $count . ' ');
  return $count;
}