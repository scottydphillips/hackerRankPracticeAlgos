'''
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
'''

def jumping_on_clouds(c):
  jumps = 0;
  plus2 = None;
  plus1 = None;
  for i in range(len(c)):
    if i + 1 < len(c):
      plus2 = c[i + 2];
      plus1 = c[i + 1];
    else:
      print('high return', jumps);
      return jumps;
    print('i', i);
    print('show plus 2', plus2);
    print('show plus 1', plus1);
    if plus2 == 0:
      print('plus2 jumps');
      jumps += 1;
      print('jumps', jumps);
      i = i + 2;
      continue;
    if plus1 == 0:
      print('plus1 jump');
      jumps += 1;
      print('jumps', jumps);
      i += 1;

jumping_on_clouds([0, 0, 1, 0, 0, 1, 0]); #4
jumping_on_clouds([0, 0, 0, 0, 0, 1, 0]); #3