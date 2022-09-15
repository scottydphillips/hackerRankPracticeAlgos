/* 
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime ≤ 0) to arrived late (arrivallTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
*/

angryProfessor = (k, a) => {
  let onTimeStudents = 0;
  a.forEach((student) => {
    console.log('student', student);
    if (student <= 0) {
      onTimeStudents++;
      console.log('onTimeStudents', onTimeStudents);
    }
  });
  console.log('return', onTimeStudents);
  if (onTimeStudents < k) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log('testCase0', angryProfessor(3, [-1, -3, 4, 2])) //YES
console.log('testCase1', angryProfessor(2, [0, -1, 2, 1])) //NO