/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/
function FindIntersection(strArr) {
  let returnArray = [];
  let arr1 = strArr[0].split(',');
  arr1 = arr1.map((el) => el.replaceAll(' ', ''));
  console.log('arr1', arr1);
  let arr2 = strArr[1].split(',');
  arr2 = arr2.map((el) => el.replaceAll(' ', ''));
  console.log('arr2', arr2);
  arr1.forEach((el, idx) => {
    arr2.forEach((e, i) => {
      if (e === el) {
        console.log('el', el);
        console.log('e', e);
        returnArray.push(el);
      }
    });
  });
  console.log('returnArray', returnArray);
  if (returnArray.length) {
    return returnArray.join(',');
  } else {
    return "false";
  }
}

// console.log('testCase1',FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])) // 1, 4, 13
// console.log('testCase2', FindIntersection(['1,3,9,10,17,18', '1,4,9,10'])) // 1, 9, 10
console.log('testCase3', FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"])); // 5, 6, 11
// console.log('testCase4', FindIntersection(['2, 3, 4,', '3'])); // 3
// console.log('testCase5', FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"])) // 2, 4