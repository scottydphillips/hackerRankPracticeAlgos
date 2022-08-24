<?php 
/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a given budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

Example
b=60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB Drive = 58. Choose the latter as the more expensive option and return 58.
*/

function get_money_spent($keyboards, $drives, $b) { 
  $holding_array = [];
  foreach($keyboards as $keyboard) {
    foreach ($drives as $drive) {
      if (($keyboard + $drive) <= $b) {
        array_push($holding_array, ($keyboard + $drive));
      }
    }
  }
  if (count($holding_array) > 0) {
    return max(...$holding_array);
  } else {
    return -1;
  }
}

get_money_spent([3, 1], [5, 2, 8], 10);
get_money_spent([4], [5], 5);