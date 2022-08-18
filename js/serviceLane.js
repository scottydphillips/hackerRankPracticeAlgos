/* 
A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.
You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.
*/
serviceLane = (n, cases) => {
  let holdingArray = [];
  for (let c of cases) {
    console.log('c', c);
    let a = c[0];
    console.log('a', a);
    let b = c[1];
    console.log('b', b);
    let min = n[a];
    console.log('min', min);
    for (a; a <= b; a++) {
      let current = n[a];
      console.log('current', current);
      if (min > current) {
        min = current;
        console.log('min', min);
      }
    }
    holdingArray.push(min);
    console.log('holdingArray', holdingArray);
  }
  console.log('return', holdingArray);
  return holdingArray;
}

console.log('testCase0', serviceLane([2, 3, 1, 2, 3, 2, 3, 3], [[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]));