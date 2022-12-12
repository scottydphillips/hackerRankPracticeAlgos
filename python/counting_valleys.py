'''
An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly 'steps' steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
'''

def counting_valleys(steps, path):
  if steps != len(path):
    return;
  elevation = 0;
  valleys = 0;
  for i in path:
    if i == 'D':
      elevation -= 1;
      print('elevation', elevation);
    if i == 'U':
      elevation += 1;
      if elevation == 0:
        valleys += 1;
      print('elevation', elevation);
  print('valleys', valleys);
  return valleys;

counting_valleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']);
