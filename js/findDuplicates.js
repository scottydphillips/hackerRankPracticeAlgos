findDuplicates = (arr) => {
	let duplicates = [];
	for(let i=0; i<arr.length; i++) {
		let current = arr[i];
		let j = i + 1;
		console.log('current', current);
		for(j; j<arr.length; j++) {
			let next = arr[j];
			console.log('next', next);
			if (current === next) {
				duplicates.push(next);
				console.log('duplicates');
			}
		}
	}
	console.log('duplicates', duplicates);
}

findDuplicates([6, 3, 1, 4, 7, 4, 2, 8, 9, 2]);