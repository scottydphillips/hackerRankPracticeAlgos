/*
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
*/


pangrams = (s) => {
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
    z: 0,
  }
  s = s.toLowerCase();
  split = s.split('');
  console.log('split', split);
  split.forEach((letter) => {
    if (alphabet.hasOwnProperty(letter)) {
      alphabet[letter]++; 
    }
  });
  console.log('alphabet', alphabet);
  let counts = Object.values(alphabet);
  console.log('counts', counts);
  if (counts.includes(0)) {
    return 'not pangram';
  } else {
    return 'pangram';
  }
}

console.log('testCase0', pangrams('We promptly judged antique ivory buckles for the next prize')); //pangram
console.log('testCase1', pangrams('We promptly judged antique ivory buckles for the prize')); //not pangram