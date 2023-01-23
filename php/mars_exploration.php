<?php
/*
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
*/

function mars_exploration($s) {
  $count = 0;
  $split = chunk_split($s, 3);
  var_dump($split);
  $split = explode("\n", $split);
  array_pop($split);
  var_dump($split);
  foreach($split as $message) {
    if($message !== 'SOS') {
      $splitMessage = str_split($message);
      array_pop($splitMessage);
      var_dump($splitMessage);
      if($splitMessage[0] !== 'S') {
        $count++;
      }
      if($splitMessage[1] !== 'O') {
        $count++;
      }
      if($splitMessage[2] !== 'S') {
        $count++;
      }
    }
  }
  var_dump($count);
  return $count;
}

mars_exploration('SOSSPSSQSSOR');
mars_exploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS');