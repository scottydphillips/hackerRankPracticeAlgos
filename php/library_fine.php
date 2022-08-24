<?php
/*
Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 x (the number of days late).
If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 x (the number of months late).
If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10,000.
Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000.
*/

function library_fine($d1, $m1, $y1, $d2, $m2, $y2) {
  $fine = 0;
  if ($y2 > $y1) return $fine;
  if ($y1 > $y2) {
    $fine = 10000;
    return $fine;
  }
  if ($m2 > $m1) return $fine;
  if ($m1 > $m2) {
    $fine = ($m1 - $m2) * 500;
    return $fine;
  }
  if ($d1 > $d2) {
    $fine = ($d1 - $d2) * 15;
    return $fine;
  }
  return $fine;
}