<?php 
/*
There is a collection of rocks where each rock has various minerals embeded in it. Each type of mineral is designated by a lowercase letter in the range ascii[a-z]. There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.
*/

function gemstones($arr) {
  $alphabet = [
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
  ];

  foreach ($arr as $str) {
    $split = str_split($str);
    // Find Duplicates
    $map = [];
    for ($i = 0; $i < count($split); $i++) {
      $current = $split[$i];
      if (!in_array($current, $map)) {
        array_push($map, $current);
      }
    }
    // print_r('map: ');
    // var_dump($map);
    // print_r("\n");
    foreach ($map as $letter) {
      if (isset($alphabet[$letter])) {
        $alphabet[$letter]++;
      }
    }
  }
  // print_r('alphabet: ');
  // var_dump($alphabet);
  // print_r("\n");
  $count = 0;
  $vals = array_values($alphabet);
  foreach($alphabet as $letter) {
    if ($letter === count($arr)) {
      $count++;
    }
  }
  print_r('return : ' . $count);
  return $count;
}

// gemstones(['abcdde', 'baccd', 'eeabg']);
gemstones(['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd']);