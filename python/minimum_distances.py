'''
The distance between two array values is the number of indices between them. Given a, find the minimum distance between any pair of equal elements in the array. If no such value exists, return -1.
'''

def minimum_distances(a):
  array_map = {};
  for val in a:
    if val in array_map:
      array_map[val] += 1;
    else:
      array_map[val] = 1;
  print('map', array_map);
  dupe_array = [];
  for val in array_map:
    print('val', val);
    if array_map[val] > 1:
      first = a.index(val);
      print('first', first);
      second = len(a) - a[::-1].index(val) - 1;
      print('second', second);
      dupe_array.append(abs(first - second));
      print('dupe_array', dupe_array);
  if len(dupe_array) < 1:
    print('-1');
    return -1;
  else:
    print('return', min(dupe_array));
    return min(dupe_array);

minimum_distances([3, 2, 1, 2, 3]);
minimum_distances([7, 1, 3, 4, 1, 7]);