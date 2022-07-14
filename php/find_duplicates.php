<?php function find_duplicates($arr) {
  $duplicates = array();
  for ($i = 0; $i < count($arr); $i++) {
    $current = $arr[$i];
    $j = $i + 1;
    print_r('current ' . $current . ' ');
    for ($j; $j < count($arr); $j++) {
      $next = $arr[$j];
      print_r('next ' . $next . ' ');
      if ($current === $next) {
        array_push($duplicates, $next);
        print_r('duplicates ' . $duplicates . ' ');
      }
    }
  }
  print_r('return '. $duplicates . ' ');
  return $duplicates;
}