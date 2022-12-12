'''
When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:
There is a list of 26 character heights aligned by index to their letters. For example, 'a' is at index 0 and 'z' is at index 25. There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm2 assuming all letters are 1mm wide.
'''

def designer_pdf_viewer(h, word):
  alphabet = {
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
  }
  area = 0;
  holding_array = [];
  alpha_keys = list(alphabet.keys());
  print('alpha_keys', alpha_keys);
  for letter in alpha_keys:
    print('letter', letter);
    for part in word:
      if letter == part:
        print('alphabet[letter]', alphabet[letter]);
        holding_array.append(alphabet[letter]);
        print('holding_array', holding_array);
  area = (max(holding_array) * len(word));
  print('return', area);
  return area;

designer_pdf_viewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc');
designer_pdf_viewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba');
