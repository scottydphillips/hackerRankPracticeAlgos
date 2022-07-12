breakingRecords = (scores) => {
	let min = scores[0];
	let minCount = 0;
	let max = scores[0];
	let maxCount = 0;
	for (let i = 0; i < scores.length; i++) {
		let current = scores[i]
		if (current !== max && current > max) {
			max = current; 
			maxCount++;
		} 
		if (current!== min && current < min) {
			min = current; 
			minCount++;
		}
	}
		console.log([maxCount, minCount])
		return [maxCount, minCount];
}


console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));