<?php
function fizzBuzz($n) {
  for ($i = 1; $i <= $n; $i++) {
    if ($i % 5 === 0 && $i % 3 === 0) {
      print_r('FizzBuzz' . "\n");
    } elseif ($i % 5 === 0) {
      print_r('Buzz' . "\n");
    } elseif ($i % 3 === 0) {
      print_r('Fizz' . "\n");
    } else {
      print_r($i . "\n");
    }
  }
}

print_r(fizzBuzz(40));