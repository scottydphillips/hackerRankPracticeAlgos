<?php
/* 
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
*/

function jumping_on_clouds($c) {
  $jumps = 0;
  $i = 0;
  for ($i; $i < count($c); $i) {
    if ($i + 1 < count($c)) {
      $plus_2 = $c[$i + 2];
      $plus_1 = $c[$i + 1];
    } else {
      print_r('high return ' . $jumps . "\n");
      return $jumps;
    }
    print_r('i ' . $i . "\n");
    print_r('show plus 2 ' . $plus_2 . "\n");
    print_r('show plus 1 ' . $plus_1 . "\n");
    if ($plus_2 === 0) {
      print_r('plus 2' . "\n");
      $jumps++;
      print_r('jumps ' . $jumps . "\n");
      $i = $i + 2;
      continue;
    }
    if ($plus_1 === 0) {
      print_r('plus 1' . "\n");
      $jumps++;
      print_r('jumps ' . $jumps . "\n");
      $i++;
    }
  }
  print_r('low return ' . $jumps . "\n");
  return $jumps;
}

jumping_on_clouds([0, 0, 1, 0, 0, 1, 0]); //4
jumping_on_clouds([0, 0, 0, 0, 1, 0]); //3