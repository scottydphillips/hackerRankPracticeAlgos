<?php
/*
HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day, half of those 5 people (i.e., floor(5/2)) like the advertisement and each shares it with 3 of their friends. At the beginning of the second day, floor(5/2) x 3 = 2 x 3 = 6 people receive the advertisement.

Each day, floor(recipients / 2) of the recipients like the advertisement and will share it with 3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
*/

function viral_advertising($n) {
  $shared = 5;
  $likes = 2;
  $cumulative = 2;
  for($i = 2; $i <= $n; $i++) {
    print_r('day ' . $i . "\n");
    $shared = (floor($shared / $likes) * 3); 
    print_r('shared ' . $shared . "\n");
    $liked = floor($shared / 2);
    print_r('likes ' . $liked . "\n");
    $cumulative = $cumulative + $liked;
    print_r('cumulative ' . $cumulative . "\n");
  }
  return $cumulative;
}

echo viral_advertising(3);
echo viral_advertising(5);