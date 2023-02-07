/*
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. abc->cba Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a given string is funny. If it is, return Funny, otherwise return Not Funny.
*/

funnyString = (s) => {
  let split = s.split('');
  console.log('split', split);
  let r = split.reverse().join('');
  console.log('r', r);
  let sASCIIValues = []
  let rASCIIValues = []
  for (let i = 0; i < s.length; i++) {
      let val = s.charCodeAt(i);
      sASCIIValues.push(val);
  }
  for (let i = 0; i < r.length; i++) {
      let val = r.charCodeAt(i);
      rASCIIValues.push(val);
  }
  console.log('sASCIIValues', sASCIIValues);
  console.log('rASCIIValues', rASCIIValues);
  let sDiffs = [];
  let rDiffs = [];
  for (let i = 0; i < sASCIIValues.length; i++) {
    if (i < sASCIIValues.length - 1) {
      sDiffs.push(Math.abs(sASCIIValues[i] - sASCIIValues[i + 1]));
      // console.log('in loop sDiffs', sDiffs);
    }
  }
  for (let i = 0; i < rASCIIValues.length; i++) {
    if (i < rASCIIValues.length - 1) {
      rDiffs.push(Math.abs(rASCIIValues[i] - rASCIIValues[i + 1]));
      // console.log('in loop rDiffs', rDiffs);
    }
  }
  console.log('post loop sDiffs', sDiffs);
  console.log('post loop rDiffs', rDiffs);
  for (let i = 0; i < sDiffs.length; i++) {
      console.log('sDiffs[i]', sDiffs[i]);
      console.log('rDiffs[i]', rDiffs[i]);
      if (sDiffs[i] !== rDiffs[i]) {
          return 'Not Funny';
      }
  }
  return 'Funny';
}

console.log('testCase0', funnyString('acxz')); // Funny
console.log('testCase1', funnyString('bcxz')); // Not Funny