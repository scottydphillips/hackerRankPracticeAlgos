birthdayChocolate = (s, d, m) => {
  let total = 0;
  let qualifyingSegments = 0;
  for (let i = 0; i < s.length; i++) {
    console.log('reset ===================');
    console.log('i', i);
    total = 0;
    for (let j = i; j < (i + m); j++) {
      console.log('j', j);
      console.log('s[j]', s[j]);
      total += s[j];
      console.log('total', total);
      if (total === d && j === ((i + m) - 1)) {
        qualifyingSegments++;
        console.log('qualifyingSegments', qualifyingSegments);
      }
    }
  };
  console.log('return', qualifyingSegments);
  return qualifyingSegments;
}

// console.log('testCase 0', birthdayChocolate([1, 2, 1, 3, 2], 3, 2));
// console.log('testCase 1', birthdayChocolate([1, 1, 1, 1, 1, 1], 3, 2));
// console.log('testCase 2', birthdayChocolate([4], 4, 1));
console.log('testCase 3', birthdayChocolate([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));