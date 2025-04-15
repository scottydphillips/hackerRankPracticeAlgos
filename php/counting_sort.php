<?php

function counting_sort($arr) {
  $holding_array = [];
  for ($i = 0; $i < 100; $i++) {
    $holding_array[$i] = 0;
  }
  for ($i = 0; $i < count($arr); $i++) {
    $current = $arr[$i];
    $holding_array[$current]++;
  }
  $sorted_array = [];
  for ($i = 0; $i < count($holding_array); $i++) {
    if ($holding_array[$i] === 0) {
      continue;
    } else {
      for($j = 0; $j < $holding_array[$i]; $j++) {
        array_push($sorted_array, $i);
      }
    }
  }
  return $sorted_array;
}