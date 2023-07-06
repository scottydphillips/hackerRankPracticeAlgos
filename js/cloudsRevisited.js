/*
A child is playing a cloud hopping game. In this game, there are sequentially numbered clouds that can be thunderheads or cumulus clouds. The character must jump from cloud to cloud until it reaches the start again.

There is an array of clouds, c and an energy level e = 100. The character starts from c[0] and uses 1 unit of energy to make a jump of size k to cloud c[(i+k) % n]. If it lands on a thundercloud, c[i] = 1, its energy (e) decreases by 2 additional units. The game ends when the character lands back on cloud 0.

Given the values of n, k, and the configuration of the clouds as an array , determine the final value of e after the game ends.

*/

jumpingOnClouds = (c, k) => {
  let e = 100;
  for (let i = 0; i < c.length; i) {
    console.log('i', i);
    e--;
    console.log('e--', e);
    if (c[i] === 1) {
      e = e - 2;
      console.log('e - 2', e);
    }
    console.log('(i + k) % c.length', (i + k) % c.length);
    if ((i + k) % c.length !== 0 && (i + k) > c.length) {
      i = (i + k) % c.length;
      console.log('reset', i);
    } else {
      i = i + k;
    }
  }
  console.log('return', e);
  return e;
}

console.log('testCase0', jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));
console.log('testCase1', jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3));