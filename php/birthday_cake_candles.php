<?php 
/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4, 4, 1, 3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

function birthday_cake_candles($candles) {
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