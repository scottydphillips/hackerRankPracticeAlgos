<?php
/*
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. abc->cba Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a given string is funny. If it is, return Funny, otherwise return Not Funny.
*/

function funny_string($s) {
  $split = str_split($s);
  print_r('split: ');
  var_dump($split);
  print_r("\n");
  $r = array_reverse($split);
  print_r('r: ');
  var_dump($r);
  print_r("\n");
  $sASCIIValues = [];
  $rASCIIValues = [];
  for ($i = 0; $i < count($split); $i++) {
    $val = ord($split[$i]);
    array_push($sASCIIValues, $val);
  }
  for ($i = 0; $i < count($r); $i++) {
    $val = ord($r[$i]);
    array_push($rASCIIValues, $val);
  }
  print_r('sASCIIValues: ');
  var_dump($sASCIIValues);
  print_r("\n");
  print_r('rASCIIValues: ');
  var_dump($rASCIIValues);
  print_r("\n");
  $sDiffs = [];
  $rDiffs = [];
  for ($i = 0; $i < count($sASCIIValues); $i++) {
    if ($i < (count($sASCIIValues) - 1)) {
      array_push($sDiffs, (abs($sASCIIValues[$i] - $sASCIIValues[$i + 1])));
    }
  }
  for ($i = 0; $i < count($rASCIIValues); $i++) {
    if ($i < (count($rASCIIValues) - 1)) {
      array_push($rDiffs, (abs($rASCIIValues[$i] - $rASCIIValues[$i + 1])));
    }
  }
  print_r('sDiffs: ');
  var_dump($sDiffs);
  print_r("\n");
  print_r('rDiffs: ');
  var_dump($rDiffs);
  print_r("\n");
  for ($i = 0; $i < count($sDiffs); $i++) {
    if ($sDiffs[$i] !== $rDiffs[$i]) {
      print_r('Not Funny');
      return "Not Funny";
    }
  }
  print_r('Funny');
  return 'Funny';
}

funny_string('acxz');
funny_string('bcxz');