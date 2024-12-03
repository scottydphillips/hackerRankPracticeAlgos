/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/

function QuestionsMarks(str) {
  function isDigit(s) {
    const num = Number(s)
    return !isNaN(num) && num.toString() === s;
  }
  let split = str.split('');
  let digits = {};
  let previous = 0;
  split.forEach((char) => {
    if (isDigit(char)) {
      if (Number(char) + Number(previous) === 10) {
        digits[previous] = split.findIndex((ch) => ch === previous);
        digits[char] = split.findIndex((ch) => ch === char);
      }
      previous = char;
    }
  });
  console.log('digits', digits);
  let indexes = Object.values(digits).sort((a, b) => a - b);
  console.log('indexes', indexes);
  let numberofQuestionMarks = {};
  indexes.forEach((index, i) => {
    if (indexes[i + 1] !== undefined) {
      let substringToTest = str.substring(index, indexes[i + 1]).split('');
      console.log('substringToTest', substringToTest);
      substringToTest.forEach((s) => {
        if (s === "?") {
          if(numberofQuestionMarks["?"]) {
            numberofQuestionMarks["?"]++;
          } else {
            numberofQuestionMarks["?"] = 1;
          }
        }
      });
    }
  });
  if (numberofQuestionMarks["?"] === 3) {
    return true;
  }
  return false;
}

console.log('testCase1', QuestionsMarks('aa6?9')) // False
console.log('testCase2', QuestionsMarks('acc?7??sss?3rr1??????5')) // True