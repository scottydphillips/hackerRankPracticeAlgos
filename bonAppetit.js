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