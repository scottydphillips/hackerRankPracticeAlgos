/* 
There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.
*/

jumpingOnClouds = (c) => {
  let jumps = 0;
  let i = 0;
  let plus2;
  let plus1;
  for (i; i < c.length; i) {
    if (i + 1 < c.length) {
      plus2 = c[i + 2];
      plus1 = c[i + 1];
    } else {
      console.log('high return', jumps);
      return jumps;
    }
    console.log('i', i);
    console.log('show plus2', plus2);
    console.log('show plus1', plus1);
    if (plus2 === 0) {
      console.log('plus2 jumps');
      jumps++;
      console.log('jumps', jumps);
      i = i + 2;
      continue;
    }
    if (plus1 === 0) {
      console.log('plus1 jump');
      jumps++;
      console.log('jumps', jumps);
      i++;
    }
  }
}

console.log('testCase0', jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); //4
console.log('testCase1', jumpingOnClouds([0, 0, 0, 0, 1, 0])); //3