<?php 
/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
*/

function counting_valleys($steps, $path) {
  $elevation = 0;
  $valleys = 0;
  $path = str_split($path);
  // print_r('path ' . $path . ' ');
  foreach ($path as $step) {
    if ($step === 'D') {
      $elevation--;
      print_r('elevation ' . $elevation . ' ');
    }
    if ($step === 'U') {
      $elevation++;
      print_r('elevation ' . $elevation . ' ');
      if ($elevation === 0) {
        $valleys++;
      }
    }
  }
  print_r('valleys ' . $valleys . ' ');
  return $valleys;
}

counting_valleys(8, 'UDDDUDUU');