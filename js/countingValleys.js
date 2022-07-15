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