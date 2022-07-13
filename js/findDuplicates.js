findDuplicates = (arr) => {
	for(let i=0; i<arr.length; i++) {
		let current = arr[i];
		console.log('current', current);
		for(let j=1; j<arr.length; j++) {
			let next = arr[j];
			console.log('next', next);
		}
			if (current === next) {
				console.log('final', current);
				return current;
		}
	}
}

findDuplicates([6, 3, 1, 4, 7, 4, 2, 8, 9, 2]);