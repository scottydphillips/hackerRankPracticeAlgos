<?php function library_fine($d1, $m1, $y1, $d2, $m2, $y2) {
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