/*
The distance between two array values is the number of indices between them. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.
*/

minimumDistances = (a) => {
  let map = {};
  a.forEach((val) => {
    if (map.hasOwnProperty(val)) {
      map[val]++;
    } else {
      map[val] = 1;
    }
  });
  console.log('map', map);
  let dupeArray = [];
  for (let val in map) {
    if (map[val] > 1) {
      let first = a.findIndex((v) => v == val);
      console.log('first', first);
      let second = a.findLastIndex((v) => v == val);
      console.log('second', second);
      dupeArray.push(Math.abs(first - second));
      console.log('dupeArray', dupeArray);
    }
  }
  if (!dupeArray.length) {
    return -1;
  } else {
    return Math.min(...dupeArray);
  }
}

console.log('example0', minimumDistances([3, 2, 1, 2, 3]));
console.log('testCase0', minimumDistances([7, 1, 3, 4, 1, 7]));