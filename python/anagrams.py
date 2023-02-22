'''
We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice is taking a cryptography class and finding anagrams to be very useful. She decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings, s1 and s2, that may not be of the same length, determine the minimum number of character deletions required to make s1 and s2 anagrams. Any characters can be deleted from either of the strings.
'''

def anagrams(s1, s2):
  sum = 0;
  map = {};
  s1map = {};
  s2map = {};
  s1split = [*s1];
  print('s1split', s1split);
  s2split = [*s2];
  print('s2split', s2split);
  for letter in s1split:
    if letter not in map:
      map[letter] = 1;
    else:
      map[letter] += 1;
    if letter not in s1map:
      s1map[letter] = 1;
    else:
      s1map[letter] += 1;
  for letter in s2split:
    if letter not in map:
      map[letter] = 1;
    else:
      map[letter] += 1;
    if letter not in s2map:
      s2map[letter] = 1;
    else:
      s2map[letter] += 1;
  print('map', map);
  print('s1map', s1map);
  print('s2map', s2map);
  for key in map:
    if key in s1map and key in s2map:
      map[key] = abs(s1map[key] - s2map[key]);
    sum += map[key];
  print('return', sum);
  return sum;


anagrams('cde', 'abc'); # 4
anagrams('abc', 'amnop'); # 6
anagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa'); # 19
anagrams('aassddf', 'sehjtcga'); # 11