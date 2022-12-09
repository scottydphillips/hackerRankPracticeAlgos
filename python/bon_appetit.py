'''
Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4+ 6) / 2 = 6. In the second case, he should refund 3 to Anna.
'''

def bon_appetit(bill, k, b):
  total = 0;
  for i in bill:
    total += i;
  print('total', total);
  halved_cost = total / 2;
  print('halved_cost', halved_cost);
  print('bill[k]', bill[k]);
  skipped_halved_cost = (total - bill[k]) / 2;
  print('skipped_halved_cost', skipped_halved_cost);
  if skipped_halved_cost == b:
    print('Bon Appetit');
    return 'Bon Appetit';
  else:
    print('Overpaid by ' + str(abs(skipped_halved_cost - b)));
    return abs(skipped_halved_cost - b);


bon_appetit([3, 10, 2, 9], 1, 12);
bon_appetit([3, 10, 2, 9], 1, 7);