/*
Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:

1. If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0).
2. If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 x (the number of days late).
If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 x (the number of months late).
If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10,000.
Charges are based only on the least precise measure of lateness. For example, whether a book is due January 1, 2017 or December 31, 2017, if it is returned January 1, 2018, that is a year late and the fine would be 10,000.
*/

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