birthdayCakeCandles = (candles) => {
	let count = 0;
	let tallest = Math.max(...candles);
	console.log('tallest', tallest);
	for (let i=0; i<candles.length; i++) {
		let current = candles[i];
		if (current === tallest) {
			count++;
		}
	}
	console.log('final', count);
}

birthdayCakeCandles([3, 2, 1, 3]);