designerPDFViewer = (h, word) => {
  const alphabet = {
    'a': h[0],
    'b': h[1],
    'c': h[2],
    'd': h[3],
    'e': h[4],
    'f': h[5],
    'g': h[6],
    'h': h[7],
    'i': h[8],
    'j': h[9],
    'k': h[10],
    'l': h[11],
    'm': h[12],
    'n': h[13],
    'o': h[14],
    'p': h[15],
    'q': h[16],
    'r': h[17],
    's': h[18],
    't': h[19],
    'u': h[20],
    'v': h[21],
    'w': h[22],
    'x': h[23],
    'y': h[24],
    'z': h[25]
  };
  let area = 0;
  let holdingArray = [];
  for (let letter of Object.keys(alphabet)) {
    console.log('letter', letter)
    for (let part of word) {
      console.log('part', part);
      if (letter === part) {
        console.log('alphabet.letter', alphabet[letter]);
        holdingArray.push(alphabet[letter]);
        console.log('holdingArray', holdingArray);
      }
    }
  }
  area = (Math.max(...holdingArray) * word.length);
  console.log('return', area);
  return area;
}

console.log('testCase0', designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));
console.log('testCase1', designerPDFViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
