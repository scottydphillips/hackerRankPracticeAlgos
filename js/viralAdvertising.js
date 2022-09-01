/*
HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly 5 people on social media.

On the first day, half of those 5 people (i.e., floor(5/2)) like the advertisement and each shares it with 3 of their friends. At the beginning of the second day, floor(5/2) x 3 = 2 x 3 = 6 people receive the advertisement.

Each day, floor(recipients / 2) of the recipients like the advertisement and will share it with 3 friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day 1.
*/

viralAdvertising = (n) => {
  let shared = 5;
  let likes = 2;
  let cumulative = 2;
  console.log(`day 1 ${Math.floor(shared / 2)}`);
  for (let i = 2; i <= n; i++) {
    console.log(`day ${i}`);
    shared = (Math.floor(shared / 2) * 3);
    console.log(`shared ${shared}`);
    let liked = Math.floor(shared / 2);
    console.log(`liked ${liked}`);
    cumulative = cumulative + liked;
    console.log(`cumulative ${cumulative}`);
  }
  return cumulative;
}

console.log('testCase0', viralAdvertising(3));
console.log('testCase1', viralAdvertising(5));