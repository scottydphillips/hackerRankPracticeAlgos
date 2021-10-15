isValid = (s) => {
	let split = s.split('');
	for (let i=0; i<split.length; i++) {
		let current = split[i];
		let next = split[i+1];
		if((current === '(' && next === ')') || (current === '[' && next === ']') || (current === '{' && next === '}')) {
			console.log('valid');
			return 'valid';
		} else {
			console.log('invalid');
		}
	}
}

// isValid('()');
// isValid('()[]{}')
isValid("(]");
// isValid("([)]");
// isValid('{()}');