const isString = (arg) => typeof arg === 'string';
const isNotString = (arg) => !isString(arg);

const reverseSentence = (sentence) => {
	if(isNotString(sentence)) {
		console.log('Must have valid input');
		return;
	}
	let split = sentence.split(' ');
	if(split.length < 2) {
		console.log('Must have valid input');
		return;
	}
	sentence = split.reverse().join(' ');
	console.log(sentence);
	return sentence;
}

reverseSentence('Crazy going slowly am I');
reverseSentence('');