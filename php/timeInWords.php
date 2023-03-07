<?php
/*
Given the time in numerals we may convert it into words, as shown below:
At minutes = 0, use o' clock. For minutes 1 ≤ m ≤ 30, use past, and for m > 30 use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.
*/

function toWords($n) {
  if ($n === 1 || $n === 59) return 'one';
  if ($n === 2 || $n === 58) return 'two';
  if ($n === 3 || $n === 57) return 'three';
  if ($n === 4 || $n === 56) return 'four';
  if ($n === 5 || $n === 55) return 'five';
  if ($n === 6 || $n === 54) return 'six';
  if ($n === 7 || $n === 53) return 'seven';
  if ($n === 8 || $n === 52) return 'eight';
  if ($n === 9 || $n === 51) return 'nine';
  if ($n === 10 || $n === 50) return 'ten';
  if ($n === 11 || $n === 49) return 'eleven';
  if ($n === 12 || $n === 48) return 'twelve';
  if ($n === 13 || $n === 47) return 'thirteen';
  if ($n === 14 || $n === 46) return 'fourteen';
  if ($n === 15 || $n === 45) return 'quarter';
  if ($n === 16 || $n === 44) return 'sixteen';
  if ($n === 17 || $n === 43) return 'seventeen';
  if ($n === 18 || $n === 42) return 'eighteen';
  if ($n === 19 || $n === 41) return 'nineteen';
  if ($n === 20 || $n === 40) return 'twenty';
  if ($n === 21 || $n === 39) return 'twenty one';
  if ($n === 22 || $n === 38) return 'twenty two';
  if ($n === 23 || $n === 37) return 'twenty three';
  if ($n === 24 || $n === 36) return 'twenty four';
  if ($n === 25 || $n === 35) return 'twenty five';
  if ($n === 26 || $n === 34) return 'twenty six';
  if ($n === 27 || $n === 33) return 'twenty seven';
  if ($n === 28 || $n === 32) return 'twenty eight';
  if ($n === 29 || $n === 31) return 'twenty nine';
  if ($n === 30) return 'half';
}

function pastOrTo($n) {
  if ($n > 30) {
    if ($n !== 59) {
      if ($n === 45) {
        return 'to';
      }
      return 'minutes to';
    } else {
      return 'minute to';
    }
  } else {
    if ($n !== 1) {
      if ($n === 15 || $n === 30) {
        return 'past';
      }
      return 'minutes past';
    } else {
      return 'minute past';
    }
  }
}

function timeInWords($h, $m) {
  if ($m === 00) {
    return toWords($h) . " o' clock";
  }
  if ($m > 30) $h++;
  print_r(toWords($m) . ' ' . pastOrTo($m) . ' ' . toWords($h));
  return toWords($m) . ' ' . pastOrTo($m) . ' ' . toWords($h);
}

timeInWords(5, 47); // thirteen to six
timeInWords(3, 00); // three o' clock
timeInWords(7, 15); // quarter past seven