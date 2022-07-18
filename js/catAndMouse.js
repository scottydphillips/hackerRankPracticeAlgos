catAndMouse = (x, y, z) => {
  if (Math.abs(x - z) < Math.abs(y - z)) {
    return 'Cat A';
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    return 'Cat B';
  } else if (Math.abs(x - z) === Math.abs(y - z)) {
    return 'Mouse C';
  }
}

console.log('testCase0', catAndMouse(2, 5, 4));
console.log('testCase1', catAndMouse(1, 2, 3));
console.log('testCase2', catAndMouse(1, 3, 2));