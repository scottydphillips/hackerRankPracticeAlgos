'''
A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.
'''

def hurdle_race(k, height):
  max_height = max(height);
  if k >= max_height:
    print('0');
    return 0;
  else:
    print('return', max_height - k);
    return max_height - k;

hurdle_race(1, [1, 2, 3, 3, 2]);
hurdle_race(4, [1, 6, 3, 5, 2]);
hurdle_race(7, [2, 5, 4, 5, 2]);