timeConversion = (s) => {
	let splitS = s.split('');
	let shifted = '';
	let parsed = 0;
	let midnight = '0'
	console.log('split', splitS)
	if (splitS.includes('P') && splitS[0] === '1' && splitS[1] !== '2') {
		splitS.pop();
		splitS.pop();
		console.log('pop pop', splitS);
		splitS.shift()
		shifted = splitS.shift();
		console.log('shifted', shifted);
		parsed = parseInt(shifted);
		parsed += 22;
		console.log('plus 22', parsed);
		shifted = parsed.toString();
		splitS.unshift(shifted);
		console.log('unshifted', splitS);
		} else if (splitS.includes('P') && splitS[1] !== '2') { 
			splitS.pop();
			splitS.pop();
			console.log('pop pop', splitS);
			splitS.shift()
			shifted = splitS.shift();
			console.log('shifted', shifted);
			parsed = parseInt(shifted);
			parsed += 12;
			console.log('plus 12', parsed);
			shifted = parsed.toString();
			splitS.unshift(shifted);
			console.log('unshifted', splitS);
		}	else if (splitS.includes('P') && splitS[0] === '0' && splitS[1] === '2') {
			splitS.pop();
			splitS.pop();
			console.log('pop pop', splitS);
			splitS.shift()
			shifted = splitS.shift();
			console.log('shifted', shifted);
			parsed = parseInt(shifted);
			parsed += 12;
			console.log('plus 12', parsed);
			shifted = parsed.toString();
			splitS.unshift(shifted);
			console.log('unshifted', splitS);
		} else if (splitS.includes('A') && splitS[0] === '1' && splitS[1] === '2') {
			splitS.pop();
			splitS.pop();
			console.log('pop pop', splitS);
			splitS.shift();
			splitS.shift();
			console.log('shifted'. splitS);
			splitS.unshift(midnight);
			splitS.unshift(midnight);
			console.log('unshifted', splitS);
		} else {
		splitS.pop();
		splitS.pop();
		console.log('double pop', splitS);
	}
	splitS = splitS.join('')
	console.log('final', splitS);
	return splitS;
}

timeConversion('12:59:59PM');