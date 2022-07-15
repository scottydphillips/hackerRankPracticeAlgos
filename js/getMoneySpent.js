getMoneySpent = (keyboards, drives, b) => {
  let keyboardOptions = keyboards.filter((keyboard) => keyboard < b);
  let driveOptions = drives.filter((drive) => drive < b);

  let holdingArray = [];
  for (let keyboard of keyboardOptions) {
    for (let drive of driveOptions) {
      if ((keyboard + drive) <= b) {
        holdingArray.push(keyboard + drive);
        console.log('holdingArray', holdingArray);
      }
    }
  }
  if (holdingArray.length) {
    console.log('return', Math.max(...holdingArray));
    return Math.max(...holdingArray);
  } else {
    return -1;
  }
}

console.log('testCase0', getMoneySpent([3, 1], [5, 2, 8], 10));
console.log('testCase1', getMoneySpent([4], [5], 5));