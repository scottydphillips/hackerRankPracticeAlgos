/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
*/

gradingStudents = (grades) => {
	let finalGradeArray = []
	for (let i=0; i<grades.length; i++) {
		let current = grades[i]
		if (current < 38) {
			finalGradeArray.push(current);
			console.log(finalGradeArray);
		} else if (current % 10 === 3 || current % 10 === 4 || current % 10 === 8 || current % 10 === 9 ) {
			finalGradeArray.push(Math.round(current/5)*5);
			console.log(finalGradeArray);
		} else {
			finalGradeArray.push(current);
			console.log(finalGradeArray);
		}
	}
	return finalGradeArray;
}

gradingStudents([80, 96, 18, 73, 78, 60, 60, 15, 45, 15, 10, 5, 46, 87, 33, 60, 14, 71, 65, 2, 5, 97, 0])