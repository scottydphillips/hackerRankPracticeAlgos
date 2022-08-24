/*
A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side:

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
*/

pageCount = (n, p) => {
  let halfwayPoint = n / 2;
  console.log('halfwayPoint', halfwayPoint);
  if (p > 1 && p < halfwayPoint) {
    console.log('if', Math.floor(p/2));
    return Math.floor(p / 2);
  } else if (p < n && (n - p) > 1 && p > halfwayPoint) {
    console.log('else if', Math.floor((n-p)/2));
    return Math.floor((n - p) / 2);
  } else {
    if (n > 2) {
      if (p % 2 !== 0 & n % 2 === 0) {
        return 1;
      }
    }
    return 0;
  }
}

console.log('testCase0', pageCount(6, 2));
console.log('testCase1', pageCount(5, 4));
console.log('testCase9', pageCount(6, 3));
console.log('testCase26', pageCount(6, 5));
console.log('customTest', pageCount(100, 99));
console.log('testCase6', pageCount(2, 1));