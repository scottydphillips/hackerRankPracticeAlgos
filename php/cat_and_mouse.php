<?php function cat_and_mouse($x, $y, $z) {
  if (abs($x - $z) < abs($y - $z)) {
    return 'Cat A';
  } elseif (abs($x - $z) > abs($y - $z)) {
    return 'Cat B';
  } elseif (abs($x - $z) === abs($y - $z)) {
    return 'Mouse C';
  }
}

print_r(cat_and_mouse(2, 5, 4));
print_r(cat_and_mouse(1, 2, 3));
print_r(cat_and_mouse(1, 3, 2));