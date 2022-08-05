libraryFine = (d1, m1, y1, d2, m2, y2) => {
  let fine = 0;
  if (y2 > y1) return fine;
  if (y1 > y2) {
    fine = 10000;
    return fine;
  }
  if (m2 > m1) return fine;
  if (m1 > m2) {
    console.log('months');
    fine = (m1 - m2) * 500;
    console.log('m1-m2', m1 - m2);
    console.log('fine', fine);
    return fine;
  }
  if (d1 > d2) {
    console.log('days');
    fine = (d1 - d2) * 15;
    console.log('d1-d2', d1 - d2);
    console.log('fine', fine);
    return fine;
  }
  return fine;
}

console.log('testCase0', libraryFine(9, 6, 2015, 6, 6, 2015));
console.log('testCase1', libraryFine(14, 7, 2018, 5, 7, 2018));
console.log('testCase5', libraryFine(2, 7, 1014, 1, 1, 2015));
console.log('testCase10', libraryFine(28, 2, 2015, 15, 4, 2015));
console.log('testCase 16', libraryFine(15, 7, 2014, 1, 7, 2015));