/*
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a given budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

Example
b=60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB Drive = 58. Choose the latter as the more expensive option and return 58.
*/

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