'''
A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a given budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.

Example
b=60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB Drive = 58. Choose the latter as the more expensive option and return 58.
'''

def get_money_spent(keyboards, drives, b):
  keyboard_options = list(filter(lambda keyboard: keyboard < b, keyboards));
  print('keyboard_options', keyboard_options);
  drive_options = list(filter(lambda drive: drive < b, drives));
  print('drive_options', drive_options);
  holding_array = [];

  for keyboard in keyboard_options:
    print('keyboard', keyboard);
    for drive in drive_options:
      print('drive', drive);
      if keyboard + drive <= b:
        holding_array.append(keyboard + drive);
        print('holding_array', holding_array);
  if len(holding_array):
    print('return', max(holding_array));
    return max(holding_array);
  else:
    print(-1);
    return -1;

get_money_spent([3, 1], [5, 2, 8], 10);
get_money_spent([4], [5], 5);