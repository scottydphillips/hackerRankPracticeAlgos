'''
Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3], and [4,6].
'''

def divisible_sum_pairs(n, k, ar):
  num_pairs = 0;
  for i in range(len(ar)):
    num_sum = 0;
    print('RESET==============');
    print('i', i);
    j = i + 1;
    print('pre loop j', j);
    while j < len(ar):
      num_sum = ar[i] + ar[j];
      print('i + j', ar[i] + ar[j]);
      print('num_sum', num_sum);
      if num_sum % k == 0:
        num_pairs += 1;
        print('num_pairs', num_pairs);
      j += 1;
      print('in loop j', j);
  print('return', num_pairs);
  return num_pairs;

divisible_sum_pairs(6, 3, [1, 3, 2, 6, 1, 2]);