<?php function sherlock_and_squares($a, $b) {
  $count = 0;
  while ($a <= $b) {
    $sqrt = sqrt($a);
    print_r('sqrt ' . $sqrt . "\n");
    if (is_whole_number($sqrt)) {
      print_r('pants');
      $count++;
    }
    $a++;
    print_r('a ' . $a . "\n");
  }
  return $count;
}
function is_whole_number($n) {
  return is_numeric($n) && floor($n) == $n;
}

print_r('testCase0 ' . sherlock_and_squares(3, 9) . "\n");
print_r('testCase1 ' . sherlock_and_squares(17, 24) . "\n");

