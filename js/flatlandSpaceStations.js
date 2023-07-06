/*

*/

flatlandSpaceStations = (n, c) => {
  let distances = {};
  let distanceArray = [];
  for (let i = 0; i < n; i++) {
    console.log('i', i);
    distances[i] = [];
    c.forEach((d) => {
      console.log('d', d);
      console.log('abs', Math.abs(i - d));
      distances[i].push(Math.abs(i - d));
    });
    let values = Object.values(distances[i]);
    console.log('values', values);
    distanceArray.push(Math.min(...values));
  }
  console.log('distanceArray', distanceArray);
  console.log('return', Math.max(...distanceArray));
  return Math.max(...distanceArray);
}

// console.log('testCase0', flatlandSpaceStations(5, [0, 4]));
// console.log('testCase1', flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5]));
console.log('testCase2', flatlandSpaceStations(20, [13, 1, 11, 10, 6]));