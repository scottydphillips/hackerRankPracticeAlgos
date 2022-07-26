<?php function designer_pdf_viewer($h, $word) {
  $alphabet = array(
    'a' => $h[0],
    'b' => $h[1],
    'c' => $h[2],
    'd' => $h[3],
    'e' => $h[4],
    'f' => $h[5],
    'g' => $h[6],
    'h' => $h[7],
    'i' => $h[8],
    'j' => $h[9],
    'k' => $h[10],
    'l' => $h[11],
    'm' => $h[12],
    'n' => $h[13],
    'o' => $h[14],
    'p' => $h[15],
    'q' => $h[16],
    'r' => $h[17],
    's' => $h[18],
    't' => $h[19],
    'u' => $h[20],
    'v' => $h[21],
    'w' => $h[22],
    'x' => $h[23],
    'y' => $h[24],
    'z' => $h[25],
  );
  $holding_array = [];
  $split = str_split($word);
  $alphabet_array = array_keys($alphabet);
  foreach($alphabet_array as $letter) {
    print_r('letter ' . $letter . "\n");
    foreach($split as $part) {
      print_r('part ' . $part . "\n");
      if ($letter === $part) {
        print_r('alphabet => letter ' . $alphabet[$letter] . "\n");
        array_push($holding_array, $alphabet[$letter]);
        print_r('holding_array ' . $holding_array . "\n");
      }
    }
  }
  $area = (max(...$holding_array) * count($split));
  print_r('return ' . $area . "\n");
  return $area;
}

print_r('testCase0 ' . designer_pdf_viewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc') . "\n");
print_r('testCase1 ' . designer_pdf_viewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba') . "\n");