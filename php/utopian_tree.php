<?php function utopian_tree($n) {
  $height = 1;
  for ($i = 0; $i < $n; $i++) {
    if ($i % 2 === 0) {
      $height = $height * 2;
    } else {
      $height++;
    }
  }
  print_r('height' . $height . "\n");
  return $height;
}

print_r('testCase0 ' . utopian_tree(0) . "\n");
print_r('testCase1 ' . utopian_tree(1) . "\n");
print_r('testCase2 ' . utopian_tree(4) . "\n");