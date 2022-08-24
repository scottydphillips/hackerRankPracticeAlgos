<?php
/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/

function grading_students($grades) {
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