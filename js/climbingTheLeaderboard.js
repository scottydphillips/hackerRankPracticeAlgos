/*
An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number  on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
*/

climbingTheLeaderboard = (ranked, player) => {
  let rankedClone = ranked;
  let finalArray = [];
  for(let i = 0; i < ranked.length; i++) {
    let rankedCurrent = ranked[i];
    console.log('rankedCurrent', rankedCurrent);
    for (let j = 0; j < player.length; j++) {
      let playerCurrent = player[j];
      console.log('playerCurrent', playerCurrent);
      if (playerCurrent > rankedCurrent) {
        let tmp = rankedCurrent;
        rankedCurrent = playerCurrent;
        ranked[i + 1] = tmp;
      } else {
        rankedClone.push(playerCurrent);
        let idx = rankedClone.findIndex((rank) => rank === playerCurrent);
        finalArray.push(idx);
      }
    }
  }
}

console.log('testCase0', climbingTheLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) //6, 4, 2, 1
console.log('testCase1', climbingTheLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])) //6, 5, 4, 2, 1