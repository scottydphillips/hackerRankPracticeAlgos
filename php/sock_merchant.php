<?php function sock_merchant($n, $ar) {
  sort($ar);
  $res = 0;
  $i = 0;
  print_r($ar);
  while ($i < $n) {
    $current = $ar[$i];
    $count = 1;
    $i++;
    print_r('i '. $i . ' ');
    print_r('count ' . $count . ' ');
    while ($i < $n && $ar[$i] === $current) {
      $count++;
      $i++;
      print_r('i ' . $i . ' ');
      print_r('count '. $count . ' ');
    }
    if ($count >= 2) {
      $res = $res + floor($count / 2);
      print_r('res ' . $res . ' ');
    }
  }
  print_r('return ' . $res . ' ');
  return $res;
}

sock_merchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);