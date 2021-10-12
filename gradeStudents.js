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