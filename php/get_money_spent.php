<?php function get_money_spent($keyboards, $drives, $b) { 
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