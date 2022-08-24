/*
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
*/

countingValleys = (steps, path) => {
  if (steps !== path.length) {
    throw new Error('Invalid Input');
  }
  let elevation = 0;
  let valleys = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'D') {
      elevation--;
      console.log('elevation', elevation);
    }
    if (path[i] === 'U') {
      elevation++;
      if (elevation === 0) {
        valleys++;
      }
      console.log('elevation', elevation);
    }
  };
  console.log('valleys', valleys);
  return valleys;
}

console.log('testCase0', countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']))