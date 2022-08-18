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