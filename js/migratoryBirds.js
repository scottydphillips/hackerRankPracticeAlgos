/*
Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example
arr = [1, 1, 2, 2, 3]
There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
*/

migratoryBirds = (arr) => {
  let typeOne = [];
  let typeTwo = [];
  let typeThree = [];
  let typeFour = [];
  let typeFive = [];
  let holdingArray = [];
  for (let i of arr) {
    if (i === 1) typeOne.push(i);
    if (i === 2) typeTwo.push(i);
    if (i === 3) typeThree.push(i);
    if (i === 4) typeFour.push(i);
    if (i === 5) typeFive.push(i);
  }
  console.log('typeOne', typeOne);
  console.log('typeTwo', typeTwo);
  console.log('typeThree', typeThree);
  console.log('typeFour', typeFour);
  console.log('typeFive', typeFive);
  holdingArray.push(typeOne.length, typeTwo.length, typeThree.length, typeFour.length, typeFive.length);
  console.log('holdingArray', holdingArray);
  let mostCommon = holdingArray.indexOf(Math.max(...holdingArray))
  console.log('mostCommon', mostCommon);
  console.log('return', mostCommon + 1);
  return (mostCommon + 1);
}

console.log('sample0', migratoryBirds([1, 4, 4, 4, 5, 3]));
console.log('sample1', migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));