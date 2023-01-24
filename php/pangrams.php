<?php
/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
*/

function pangrams($s) {
  $alphabet = array(
    'a' => 0,
    'b' => 0,
    'c' => 0,
    'd' => 0,
    'e' => 0,
    'f' => 0,
    'g' => 0,
    'h' => 0,
    'i' => 0,
    'j' => 0,
    'k' => 0,
    'l' => 0,
    'm' => 0,
    'n' => 0,
    'o' => 0,
    'p' => 0,
    'q' => 0,
    'r' => 0,
    's' => 0,
    't' => 0,
    'u' => 0,
    'v' => 0,
    'w' => 0,
    'x' => 0,
    'y' => 0,
    'z' => 0
  );
  $s = strtolower($s);
  $split = str_split($s);
  foreach($split as $letter) {
    if (isset($alphabet[$letter])) {
      $alphabet[$letter]++;
    }
  }
  // var_dump($alphabet);
  $counts = array_values($alphabet);
  // var_dump($counts);
  if (in_array(0, $counts)) {
    print_r('not pangram');
    return 'not pangram';
  } else {
    print_r('pangram');
    return 'pangram';
  }
}

pangrams('We promptly judged antique ivory buckles for the next prize'); //pangram
pangrams('We promptly judged antique ivory buckles for the prize'); //not pangram