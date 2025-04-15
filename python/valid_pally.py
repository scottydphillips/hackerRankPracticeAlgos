'''
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
'''

import re

def is_palindrome(s):
  if (s == ' '):
    return True;
  # regex = '/[^a-zA-Z0-9 :]/g';
  s = s.lower();
  string = re.sub(r'/[^a-zA-Z0-9 :]/g', '', s);
  print('string', string);
  string = string.replace(' ', '');
  # print('s', s);
  split = [*s];
  rev = split[::-1];
  reverse = '';
  reverse = reverse.join(rev);
  print('reverse', reverse);
  if (reverse == s):
    print('true');
    return True;
  else:
    print('false');
    return False;

is_palindrome('race a car'); # false
is_palindrome("`l;?? 1o1 ??;l`"); # true