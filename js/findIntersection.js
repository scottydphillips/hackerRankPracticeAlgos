/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/
function FindIntersection(strArr) {
  let returnArray = [];
  let contents = {};
  strArr.forEach((str, idx) => {
    let split = str.split(',');
    console.log('split', split);
    split.forEach((s) => {
      s.replace(' ', '');
      if (contents.hasOwnProperty(s)) {
        contents[s]++;
      } else {
        contents[s] = 1;
      }
    })
    console.log('contents', contents);
  });

  for (let content in contents) {
    console.log('content', contents[content]);
    if (contents[content] > 1) {
      returnArray.push(content);
    } 
  }
  returnArray.sort((a,b) => a - b)
  console.log('returnArray', returnArray);
  if (returnArray.length) {
    returnArray = returnArray.join(',').replaceAll(' ', '');
    console.log('returnArray type', typeof returnArray);
    return returnArray;
  } else {
    return 'false';
  }
}

console.log('testCase1',FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])) // 1, 4, 13
console.log('testCase2', FindIntersection(['1,3,9,10,17,18', '1,4,9,10'])) // 1, 9, 10