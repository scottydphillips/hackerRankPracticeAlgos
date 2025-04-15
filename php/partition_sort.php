<?php

function partition_sort($arr) {
  $left = [];
  $equal = $arr[0];
  $right = [];
  for($i = 0; $i < count($arr); $i++) {
    if ($arr[$i] < $equal) {
      array_push($left, $arr[$i]);
    } elseif ($arr[$i] > $equal) {
      array_push($right, $arr[$i]);
    }
  }
  return [...$left, $equal, ...$right];
}

partition_sort([4, 5, 3, 7, 2]);