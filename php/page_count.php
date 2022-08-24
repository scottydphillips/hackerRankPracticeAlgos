<?php 
/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
*/

function page_count($n, $p) {
  $halfway_point = $n / 2;
  if ($p > 1 && $p < $halfway_point) {
    print_r(floor($p / 2));
    return floor($p / 2);
  } elseif ($p < $n && ($n - $p) > 1 && $p > $halfway_point) {
    print_r(floor($n - $p) / 2);
    return floor(($n - $p) / 2);
  } else {
    if ($n > 2) {
      if ($p % 2 != 0 && $n % 2 === 0) {
        print_r(1);
        return 1;
      }
    }
    print_r(0);
    return 0;
  }
}

page_count(6, 2);
page_count(5, 4);
page_count(6, 3);
page_count(6, 5);
page_count(2, 1);