/*
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
*/

circularArrayRotation = (a, k, queries) => {
  let finalArray = [];
  for (let i = 0; i < k; i++) {
    let pop = a.pop();
    console.log('pop', pop);
    console.log('a', a);
    a.unshift(pop);
    console.log('a2', a);
  }
  for (let j = 0; j < queries.length; j++) {
    finalArray.push(a[queries[j]]);
    console.log('finalArray', finalArray);
  }
  console.log('return', finalArray);
  return finalArray;
}

console.log('testCase0', circularArrayRotation([3, 4, 5], 2, [1, 2])); // 5, 3