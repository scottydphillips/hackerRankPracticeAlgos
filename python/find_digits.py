'''
An integer d is a divisor of an integer n if the remainder of n / d = 0 .
Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
Example:
n = 124
Check whether 1, 2, and 4 are divisors of 124. All 3 numbers divide evenly into 124 so return 3.
n = 111
Check whether 1, 1, 1 are divisors of 111. All 3 numbers divide evenly into 111 so return 3.
n = 10
Check whether 1 and 0 are divisors of 10. 1 is but 0 is not. Return 1.
'''

def find_digits(n):
  multiple_count = 0;
  split = [*str(n)];
  print('split', split);
  for multiple in split:
    multiple = int(multiple);
    print('multiple', multiple);
    if multiple == 0:
      continue;
    if n % multiple == 0:
      multiple_count += 1;
  print('return', multiple_count);
  return multiple_count;

find_digits(124);
find_digits(111);
find_digits(10);
find_digits(1012);