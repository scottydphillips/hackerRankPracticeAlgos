function breakingRecords($scores) {
  $min = $scores[0];
  $min_count = 0;
  $max = $scores[0];
  $max_count = 0;
  for ($i = 0; $i < count($scores); $i++) {
    $current = $scores[$i];
    if ($current != $max && $current > $max) {
      $max = $current;
      $max_count++;
    }
    if ($current != $min && $current < $min) {
      $min = $current;
      $min_count++;
    }
  }
  return [$max_count, $min_count];
}
