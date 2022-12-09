"""
A Discrete Mathematics professor has a class of students. Frustrated with their lack of discipline, the professor decides to cancel class if fewer than some number of students are present when class starts. Arrival times go from on time (arrivalTime ≤ 0) to arrived late (arrivallTime > 0).

Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.
"""

def angry_professor(k, a):
  on_time_students = 0;
  for student in a:
    print('student', student);
    if student <= 0:
      on_time_students += 1;
      print('on_time_students', on_time_students);
  print('return', on_time_students);
  if on_time_students < k:
    print('YES');
    return "YES";
  else:
    print('NO');
    return 'NO';

angry_professor(3, [-1, -3, 4, 2]) # YES
angry_professor(2, [0, -1, 2, 1]) # NO