<?php
function reverse_sentence($sentence) {
  if (!is_string($sentence)) {
    throw new Error('Not valid input');
  }
  $split = explode(" ", $sentence);
  print_r($split);
  if (count($split) < 2) {
    throw new Error('Not valid input');
  }
  $reversed_sentence = array_reverse($split);
  $sentence = implode(" ", $reversed_sentence);
  print_r($sentence);
}

reverse_sentence('crazy going slowly am I');
reverse_sentence('');