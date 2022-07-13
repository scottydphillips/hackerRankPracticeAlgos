function migratory_birds($arr) {
  $type_one = [];
  $type_two = [];
  $type_three = [];
  $type_four = [];
  $type_five = [];
  $holding_array = [];
  foreach($arr as $i) {
    if ($i == 1) {
      array_push($type_one, $i);
    }
    if ($i == 2) {
      array_push($type_two, $i);
    }
    if ($i == 3) {
      array_push($type_three, $i);
    }
    if ($i == 4) {
      array_push($type_four, $i);
    }
    if ($i == 5) {
      array_push($type_five, $i);
    }
  }
  array_push($holding_array, count($type_one), count($type_two), count($type_three), count($type_four), count($type_five));
  $most_common = array_search(max($holding_array), $holding_array);
  return ($most_common + 1);
}