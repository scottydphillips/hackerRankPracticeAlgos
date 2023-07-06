<?php
/*
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
*/

function circular_array_rotation($a, $k, $queries) {
  $finalArray = [];
  for ($i = 0; $i < $k; $i++) {
    $pop = array_pop($a);
    array_unshift($a, $pop);
  }
  for ($j = 0; $j < count($queries); $j++) {
    array_push($finalArray, $a[$queries[$j]]);
  }
  var_dump($finalArray);
  return $finalArray;
}

circular_array_rotation([3, 4, 5], 2, [1, 2]);