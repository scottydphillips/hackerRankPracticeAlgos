<?php
/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, s1 and s2, that may not be of the same length, determine the minimum number of character deletions required to make s1 and s2 anagrams. Any characters can be deleted from either of the strings.
*/

function anagrams($s1, $s2) {
  $s1split = str_split($s1);
  $s2split = str_split($s2);
  $map = [];
  $s1map = [];
  $s2map = [];
  $sum = 0;
  foreach($s1split as $letter) {
    !isset($map[$letter]) ? $map[$letter] = 1 : $map[$letter] += 1;
    !isset($s1map[$letter]) ? $s1map[$letter] = 1 : $s1map[$letter] += 1;
  }
  foreach($s2split as $letter) {
    !isset($map[$letter]) ? $map[$letter] = 1 : $map[$letter] += 1;
    !isset($s2map[$letter]) ? $s2map[$letter] = 1 : $s2map[$letter] += 1;
  }
  print_r('map: ');
  var_dump($map);
  print_r("\n");
  print_r('s1map: ');
  var_dump($s1map);
  print_r("\n");
  print_r('s2map: ');
  var_dump($s2map);
  print_r("\n");
  foreach($map as $key => $value) {
    print_r('key: ');
    var_dump($key);
    print_r('value: ');
    var_dump($value);
    print_r("\n");
    if (isset($s1map[$key]) && isset($s2map[$key])) {
      $map[$key] = abs($s1map[$key] - $s2map[$key]);
      print_r('subtracted value: ');
      var_dump($map[$key]);
      print_r("\n");
    }
    $sum += $map[$key];
  }
  print_r('sum: ');
  var_dump($sum);
  print_r("\n");
  return $sum;
}

// anagrams('cde', 'abc'); // 4
// anagrams('abc', 'amnop'); // 6
// anagrams('aassddf', 'sehjtcga'); // 11
anagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa'); // 19
