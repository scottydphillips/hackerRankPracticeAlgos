/*
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) {
  const split = sen.split(' ');
  let longest = '';
  console.log('split', split);
  split.forEach((word) => {
    if (word.match(/[^a-zA-Z\d\s:]/g)) {
      console.log('matched', word);
      word = word.replace(/[^a-zA-Z\d\s]/g, '');
      console.log('replaced', word);
    }
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}

console.log('testCase1', LongestWord("fun&!! time"));
console.log('testCase2', LongestWord("I love dogs"));
console.log('testCase3', LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~"));