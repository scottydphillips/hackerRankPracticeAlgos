/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.
*/

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