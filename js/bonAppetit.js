/*
Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4+ 6) / 2 = 6. In the second case, he should refund 3 to Anna.
*/

bonAppetit = (bill, k , b) => {
  let total = 0;
  bill.forEach((i) => total += i);
  console.log('total', total);
  const halvedCost = total / 2;
  console.log('halvedCost', halvedCost);
  console.log('bill[k]', bill[k]);
  const skippedHalvedCost = (total - bill[k]) / 2;
  console.log('skippedHalvedCost', skippedHalvedCost);
  if (skippedHalvedCost === b) {
    console.log('Bon Appetit')
    return 'Bon Appetit';
  } else {
    console.log('Overpaid by', Math.abs(skippedHalvedCost - b));
    return Math.abs(skippedHalvedCost - b);
  }
}

console.log('sample0', bonAppetit([3, 10, 2, 9], 1, 12));
console.log('sample1', bonAppetit([3, 10, 2, 9], 1, 7));