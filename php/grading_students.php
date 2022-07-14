<?php function grading_students($grades) {
  $final_grade_array = [];
  foreach ($grades as $grade) {
    if ($grade < 38) {
      array_push($final_grade_array, $grade);
    } elseif ($grade % 10 === 3 || $grade % 10 === 4 || $grade % 10 === 8 || $grade % 10 === 9) {
      $grade = round($grade / 5) * 5;
      array_push($final_grade_array, $grade);
    } else {
      array_push($final_grade_array, $grade);
    }
  }
  print_r($final_grade_array);
  return $final_grade_array;
}

grading_students([80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0]);