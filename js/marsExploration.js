/*
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
*/

marsExploration = (s) => {
  let count = 0;
  let split = s.match(/.{1,3}/g);
  console.log('split', split);
  split.forEach((message) => {
    console.log('message', message);
    if(message !== 'SOS') {
      let splitMessage = message.split('');
      console.log('splitMessage', splitMessage);
      if(splitMessage[0] !== 'S') {
        count++;
        console.log('count', count);
      }
      if (splitMessage[1] !== 'O') {
        count++;
        console.log('count', count);
      }
      if (message[2] !== 'S') {
        count++;
        console.log('count', count);
      }
    }
  });
  console.log('return', count);
  return count;
}

console.log('testCase0', marsExploration('SOSSPSSQSSOR'));
console.log('testCase3', marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'));