<?php
/*
A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds, c and an energy level e = 100. The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i+k) % n]. If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud 0.

Given the values of n, k, and the configuration of the clouds as an array , determine the final value of e after the game ends.

*/

function jumping_on_clouds($c, $k) {
  $e = 100;
  for ($i = 0; $i < count($c); $i) {
    $e--;
    if($c[$i] === 1) {
      $e = $e - 2;
    }
    if (($i + $k) % count($c) && ($i + $k) > count($c)) {
      $i = ($i + $k) % count($c);
    } else {
      $i = $i + $k;
    }
  }
  print_r($e);
  return $e;
}

jumping_on_clouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
jumping_on_clouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);