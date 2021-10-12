countApplesAndOranges = (s, t, a, b, apples, oranges) => {
	let appleCount = 0
	let orangeCount = 0;
	for (let i=0; i<apples.length; i++) {
		let appleCurrent = apples[i];
		if (appleCurrent + a >= s && appleCurrent + a <= t) {
			appleCount++;
			console.log('apple in loop', appleCount);
		}
	}
	for (let j=0; j<oranges.length; j++) {
		let orangeCurrent = oranges[j];
		if(orangeCurrent + b <= t && orangeCurrent + b >= s) {
			orangeCount++;
			console.log('orange in loop', orangeCount);
		}
	}
	console.log('final', appleCount, orangeCount);
	return (appleCount, orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])