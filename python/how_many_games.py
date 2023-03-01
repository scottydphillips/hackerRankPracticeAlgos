'''
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. How many games can you buy during the Halloween Sale?
'''

def how_many_games(p, d, m, s):
  if s < p:
    return 0;
  sClone = s;
  pClone = p;
  count = 0;
  sClone = sClone - pClone;
  count += 1;
  pClone = pClone - d;
  if pClone > m:
    while pClone > m:
      sClone = sClone - pClone;
      if sClone > 0:
        count += 1;
      pClone = pClone - d;
      if sClone < pClone:
        break;
      if pClone <= m:
        break;

  if pClone <= m:
    pClone = m;
    while sClone >= m:
      sClone = sClone - pClone;
      count += 1;
      if sClone < pClone:
        break;
  
  return count;

how_many_games(20, 3, 6, 70); #5
how_many_games(20, 3, 6, 80); #6
how_many_games(20, 3, 6, 85); #7
how_many_games(100, 1, 1, 99); #0
how_many_games(100, 19, 1, 180); #1
how_many_games(100, 12, 55, 95); #0
how_many_games(100, 11, 10, 1); #0