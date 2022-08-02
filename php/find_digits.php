<?php function find_digits($n) {
  $multiple_count = 0;
  $split = array_map('intval', str_split($n));
  foreach($split as $multiple) {
    if ($multiple === 0) {
      continue;
    }
    if ($n % $multiple === 0) {
      $multiple_count++;
    }
  }
  return $multiple_count;
}

print_r('test_case_0 ' . find_digits(124) . "\n");
print_r('test_case_1 ' . find_digits(111) . "\n");
print_r('test_case_2 ' . find_digits(10) . "\n");
print_r('test_case_3 ' . find_digits(1012) . "\n");