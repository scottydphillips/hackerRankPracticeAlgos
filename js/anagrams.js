/*
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may not be of the same length, determine the minimum number of character deletions required to make s1 and s2 anagrams. Any characters can be deleted from either of the strings.
*/

anagrams = (s1, s2) => {
  const s1split = s1.split('');
  const s2split = s2.split('');
  let map = {};
  let s1map = {};
  let s2map = {};
  let sum = 0;
  s1split.forEach((letter) => {
    !map[letter] ? map[letter] = 1 : map[letter] += 1;
    !s1map[letter] ? s1map[letter] = 1 : s1map[letter] += 1; 
  });
  console.log('map', map); 
  s2split.forEach((letter) => {
    !map[letter] ? map[letter] = 1 : map[letter] += 1;
    !s2map[letter] ? s2map[letter] = 1 : s2map[letter] += 1;
  });
  console.log('s1map', s1map);
  console.log('s2map', s2map);
  for (let key in map) {
    if (s1map.hasOwnProperty(key) && s2map.hasOwnProperty(key)) {
      map[key] = Math.abs(s1map[key] - Math.abs(s2map[key]));
    }
    sum += map[key];
  }
  console.log('return', sum);
  return sum;
}

// console.log('testCase0', anagrams('cde', 'abc')); // 4
// console.log('example', anagrams('abc', 'amnop')); // 6
console.log('testCase1', anagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa')); // 19
// console.log('testCase162', anagrams('aassddf', 'sehjtcga')) // 11