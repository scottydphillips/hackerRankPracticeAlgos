'''
Given the time in numerals we may convert it into words, as shown below:
At minutes = 0, use o' clock. For minutes 1 ≤ m ≤ 30, use past, and for m > 30 use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.
'''

def time_in_words(h, m):
  def to_words(n):
    if (n == 1 or n == 59): 
      return 'one';
    if (n == 2 or n == 58): 
      return 'two';
    if (n == 3 or n == 57):
      return 'three';
    if (n == 4 or n == 56): 
      return 'four';
    if (n == 5 or n == 55): 
      return 'five';
    if (n == 6 or n == 54):
      return 'six';
    if (n == 7 or n == 53):
      return 'seven';
    if (n == 8 or n == 52):
      return 'eight';
    if (n == 9 or n == 51): 
      return 'nine';
    if (n == 10 or n == 50): 
      return 'ten';
    if (n == 11 or n == 49): 
      return 'eleven';
    if (n == 12 or n == 48): 
      return 'twelve';
    if (n == 13 or n == 47): 
      return 'thirteen';
    if (n == 14 or n == 46): 
      return 'fourteen';
    if (n == 15 or n == 45): 
      return 'quarter';
    if (n == 16 or n == 44): 
      return 'sixteen';
    if (n == 17 or n == 43): 
      return 'seventeen';
    if (n == 18 or n == 42): 
      return 'eighteen';
    if (n == 19 or n == 41): 
      return 'nineteen';
    if (n == 20 or n == 40): 
      return 'twenty';
    if (n == 21 or n == 39): 
      return 'twenty one';
    if (n == 22 or n == 38): 
      return 'twenty two';
    if (n == 23 or n == 37): 
      return 'twenty three';
    if (n == 24 or n == 36): 
      return 'twenty four';
    if (n == 25 or n == 35): 
      return 'twenty five';
    if (n == 26 or n == 34): 
      return 'twenty six';
    if (n == 27 or n == 33): 
      return 'twenty seven';
    if (n == 28 or n == 32): 
      return 'twenty eight';
    if (n == 29 or n == 31): 
      return 'twenty nine';
    if (n == 30): 
      return 'half';

  def past_or_to(n):
    if n > 30:
      if n != 59:
        if n == 45:
          return 'to';
        return 'minutes to';
      else:
        return 'minute to';
    else:
      if (n != 1):
        if n == 15 or n == 30:
          return 'past';
        return 'minutes past';
      else:
        return 'minute past';
  
  if m == 0:
    print(str(to_words(h)) + " o' clock");
    return str(to_words(h)) + " o' clock";
  if m > 30:
    h += 1;
  print(str(to_words(m)) + ' ' + str(past_or_to(m)) + ' ' + str(to_words(h)));
  return str(to_words(m)) + ' ' + str(past_or_to(m)) + ' ' + str(to_words(h));

time_in_words(5, 47); #thirteen minutes to six
time_in_words(3, 00); #three o' clock
time_in_words(7, 15); #quarter past seven