'''
A space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.
'''

def mars_exploration(s):
  count = 0;
  n = 3;
  split = [s[i:i+n] for i in range(0, len(s), n)]
  print(split)
  for message in split:
    print(message)
    if message != 'SOS':
      split_message = [*message]
      print(split_message)
      if split_message[0] != 'S':
        count += 1
      if split_message[1] != 'O':
        count += 1
      if split_message[2] != 'S':
        count += 1
  print('return', count)
  return count

mars_exploration('SOSSPSSQSSOR')
mars_exploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS')
