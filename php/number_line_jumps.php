function kangaroo ($x1, $v1, $x2, $v2) {
  if ($x1 <= $x2 && $v1 <= $v2) {
    return 'NO';
  }
  while ($x1 < $x2) {
    $x1 = $x1 + $v1;
    print_r($x1);
    $x2 = $x2 + $v2;
    print_r($x2);
  }
  if ($x1 == $x2) {
    print_r('YES');
  } else {
    print_r('NO');
  }
}