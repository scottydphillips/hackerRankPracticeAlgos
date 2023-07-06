'''
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of the element at a given position.

For each array, perform a number of right circular rotations and return the values of the elements at the given indices.
'''

def circular_array_rotation(a, k, queries):
  final_array = [];
  i = 0;
  while(i < k):
    print("i", i);
    pop = a.pop();
    a.insert(0, pop);
    print('a', a);
    i += 1;
  for query in queries:
    final_array.append(a[query]);
    print('final_array', final_array);
  print('return', final_array);
  return final_array;

circular_array_rotation([3, 4, 5], 2, [1, 2]); # 5, 3