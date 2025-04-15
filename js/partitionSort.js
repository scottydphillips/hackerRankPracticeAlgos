function partitionSort(arr) {
  let left = [];
  const equal = arr[0]
  let right = [];
  for(let i = 0; i < arr.length; i++) {
      if (arr[i] < equal) {
          left.push(arr[i])
      } else if (arr[i] > equal) {
          right.push(arr[i])
      }
  }
  return [...left, equal, ...right];
}

console.log('testCase0', partitionSort([4, 5, 3, 7, 2]));