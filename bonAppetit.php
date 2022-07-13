function bon_appetit($bill, $k, $b) {
  $total = 0;
  foreach ($bill as $item) {
    $total = $item + $total;
  }
  print_r("total" . $total);
  $halved_cost = $total / 2;
  print_r("halved_cost" . $halved_cost);
  $skipped_halved_cost = ($total - $bill[$k]) / 2;
  print_r("skipped_halved_cost" . $skipped_halved_cost);
  if ($skipped_halved_cost == $b) {
    print_r("Bon Appetit");
  } else {
    print_r(abs($skipped_halved_cost - $b));
  }
}