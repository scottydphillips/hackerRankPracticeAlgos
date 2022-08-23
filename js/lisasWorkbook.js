/*
Lisa just got a new math workbook. A workbook contains exercise problems, grouped into chapters. Lisa believes a problem to be special if its index (within a chapter) is the same as the page number where it's located. The format of Lisa's book is as follows:

There are  chapters in Lisa's workbook, numbered from  to .
The  chapter has  problems, numbered from  to .
Each page can hold up to  problems. Only a chapter's last page of exercises may contain fewer than  problems.
Each new chapter starts on a new page, so a page will never contain problems from more than one chapter.
The page number indexing starts at .
Given the details for Lisa's workbook, can you count its number of special problems?
*/

lisasWorkbook = (n, k, arr) => {
  let pageNum = 0;
  let specialProblems = 0;
  for (let i = 0; i < arr.length; i++) {
    pageNum++;
    console.log('top of loop pageNum', pageNum);
    for (let x = 1; x <= arr[i]; x++) {
      console.log('x', x);
      if (x === pageNum) {
        specialProblems++;
        console.log('specialProblems', specialProblems);
      }
      if (x % k === 0 && x < arr[i]) {
        pageNum++;
        console.log('pageNum', pageNum);
      }
    }
  }
  console.log('return', specialProblems);
  return specialProblems;
}

// console.log('testCase0', lisasWorkbook(5, 3, [4, 2, 6, 1, 10]));
console.log('testCase1', lisasWorkbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]));