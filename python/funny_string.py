'''
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create a copy of the string in reverse e.g. abc->cba Iterating through each string, compare the absolute difference in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences is the same for both strings, they are funny.

Determine whether a given string is funny. If it is, return Funny, otherwise return Not Funny.
'''

def funny_string(s):
  split = [*s]
  print(split)
  r = [] 
  r= split.reverse()
  print(r)
  r_string = ''
  r_string.join(r)
  sASCIIValues = []
  rASCIIValues = []
  for letter in s:
    val = ord(letter)
    sASCIIValues.append(val)
  for letter in r:
    val = ord(letter)
    rASCIIValues.append(val)
  print(sASCIIValues)
  print(rASCIIValues)





funny_string('acxz')
funny_string('bcxz')