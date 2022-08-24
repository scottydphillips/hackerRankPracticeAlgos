<?php 
/*
Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4+ 6) / 2 = 6. In the second case, he should refund 3 to Anna.
*/

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