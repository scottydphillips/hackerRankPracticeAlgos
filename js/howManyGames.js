/*
You wish to buy video games from the famous online video game store Mist.

Usually, all games are sold at the same price, p dollars. However, they are planning to have the seasonal Halloween Sale next month in which you can buy games at a cheaper price. Specifically, the first game will cost p dollars, and every subsequent game will cost d dollars less than the previous one. This continues until the cost becomes less than or equal to m dollars, after which every game will cost m dollars. How many games can you buy during the Halloween Sale?
*/

howManyGames = (p, d, m, s) => {
  if (s < p) {
    console.log('not enough cash');
    return 0;
  }
  let sClone = s;
  let pClone = p;
  let count = 0;
  sClone = sClone - pClone;
  count++;
  console.log('sClone', sClone);
  console.log('count', count);
  pClone = pClone - d;
  if (pClone > m) {
    while(pClone > m) {
      console.log('top of loop pClone', pClone);
      sClone = sClone - pClone;
      console.log('in loop sClone', sClone);
      if (sClone > 0) count++;
      console.log('in loop count', count);
      pClone = pClone - d;
      console.log('in loop pClone', pClone);
      if (sClone < pClone) {
        console.log('brk');
        break;
      }
      if (pClone <= m ) {
        console.log('brek');
        break;
      }
    } 
  } 
  if (pClone <= m) {
    pClone = m;
    while (sClone >= m) {
      console.log('top of 2nd lop pClone', pClone);
      sClone = sClone - pClone;
      console.log('in 2nd loop sClone', sClone);
      count++;
      console.log('in 2nd loop count', count);
      if (sClone < pClone) {
        console.log('break');
        break;
      }
    }
  }
  console.log('return', count);
  return count;
}

console.log('example0', howManyGames(20, 3, 6, 70)); //5
console.log('testCase0', howManyGames(20, 3, 6, 80)); //6
console.log('testCase1', howManyGames(20, 3, 6, 85)); //7
console.log('testCase3', howManyGames(100, 1, 1, 99)); //0
console.log('testCase7', howManyGames(100, 19, 1, 180)); //1
console.log('testCase11', howManyGames(100, 12, 55, 95)); //0
console.log('testCase29', howManyGames(100, 11, 10, 1)) //0