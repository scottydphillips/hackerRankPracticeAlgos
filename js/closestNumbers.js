function closestNumbers(arr) {
  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let pivot = array[0];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else if (array[i] > pivot) {
        right.push(array[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  let sorted = quickSort(arr);
  console.log('sorted', sorted);

  let returnArray = [];
  let minInterval = Infinity;
  for (let i = 0; i < sorted.length; i++) {
    let next = sorted[i + 1];
    if (next - sorted[i] < minInterval) {
      minInterval = next - sorted[i];
      console.log('minInterval', minInterval);
    }
  }
  for(let i = 0; i < sorted.length; i++) {
    let next = sorted[i + 1];
    if (next - sorted[i] === minInterval) {
      returnArray.push(sorted[i], next);
    }
  }
  console.log('returnArray', returnArray);
  return returnArray;
}

console.log('testCaseBase', closestNumbers([5, 2, 3, 4, 1]));
console.log('testCase0', closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]));