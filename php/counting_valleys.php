<?php function counting_valleys($steps, $path) {
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