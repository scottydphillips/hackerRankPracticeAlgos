/*
There is a collection of rocks where each rock has various minerals embeded in it. Each type of mineral is designated by a lowercase letter in the range ascii[a-z]. There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs at least once in each of the rocks in the collection.

Given a list of minerals embedded in each of the rocks, display the number of types of gemstones in the collection.
*/

gemstones = (arr) => {
  const alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
  }

  for (let str of arr) {
    split = str.split('');
    map = new Map();
    console.log('split', split);
    for (let letter of split) {
      map.set(letter)
    }
    map = map.keys();
    console.log('map', map);
    for (let letter of map) {
      console.log('map letters', letter);
      if (alphabet.hasOwnProperty(letter)) {
        alphabet[letter]++;
      }
    }
  }
  console.log('alphabet', alphabet)
  let count = 0;
  for (let letter in alphabet) {
    if (alphabet[letter] === arr.length) {
      count++;
      console.log('count', count);
    }
  }
  console.log('return', count);
  return count;
}

console.log('testCase0', gemstones(['abcdde', 'baccd', 'eeabg'])) // 2