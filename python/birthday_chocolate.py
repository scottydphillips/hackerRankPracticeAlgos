'''
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
'''

def birthday_chocolate(s, d, m):
  total = 0;
  qualifying_segments = 0;
  for i in range(len(s)):
    print('reset============');
    print('i', i);
    total = 0;
    j = 0;
    while (j < (m)):
      total += s[i + j];
      print('total', total)
      j += 1;
      print('j', j)
    if total == d:
      qualifying_segments += 1;
      print('qualifying_segments', qualifying_segments);
    if (i + j == len(s)):
      break;
  print('return', qualifying_segments);
  return qualifying_segments;

#birthday_chocolate([1, 2, 1, 3, 2], 3, 2);
#birthday_chocolate([1, 1, 1, 1, 1, 1], 3, 2);
#birthday_chocolate([4], 4, 1);
birthday_chocolate([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7);