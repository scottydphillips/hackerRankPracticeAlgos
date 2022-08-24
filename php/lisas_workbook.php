<?php
/*
Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:

There are n chapters in Lisa's workbook, numbered from 1 to n.
The ith chapter has arr[i] problems, numbered from 1 to arr[i].
Each page can hold up to k problems. Only a chapter's last page of exercises may contain fewer than k problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at 1.
Given the details for Lisa's workbook, can you count its number of special problems?
*/

function lisas_workbook($n, $k, $arr) {
  $page_num = 0;
  $special_problems = 0;
  for ($i = 0; $i < count($arr); $i++) {
    $page_num++;
    for ($x = 1; $x <= $arr[$i]; $x++) {
      if ($x === $page_num) {
        $special_problems++;
      }
      if ($x % $k === 0 && $x < $arr[$i]) {
        $page_num++;
      }
    }
  }
  return $special_problems;
}

print_r(lisas_workbook(5, 3, [4, 2, 6, 1, 10]));
print_r("\n");
print_r(lisas_workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]));