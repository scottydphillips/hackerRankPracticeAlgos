function countingSortStrings(arr) {
  let holdingArray = [];
  for (let i = 0; i < arr.length; i++) {
    holdingArray.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    let sortingNumber = arr[i][0];
    if (i < arr.length / 2) {
      arr[i][1] = '-';
    }
    holdingArray[sortingNumber].push(arr[i][1]);
  }
  holdingArray = holdingArray.flat();
  let returnString = holdingArray.join(' ').trim();
  console.log('returnString', returnString);
  return returnString;
}

// console.log('testCaseBase', countingSortStrings([[0, 'a'], [1, 'b'], [0, 'c'], [1, 'd']]));
console.log('testCase0', countingSortStrings([[0, 'ab'], [6, 'cd'], [0, 'ef'], [6, 'gh'], [4, 'ij'], [0, 'ab'], [6, 'cd'], [0, 'ef'], [6, 'gh'], [0, 'ij'], [4, 'that'], [3, 'be'], [0, 'to'], [1, 'be'], [5, 'question'], [1, 'or'], [2, 'not'], [4, 'is'], [2, 'to'], [4, 'the']]));