kangaroo = (x1, v1, x2, v2) => {
	if (x1 <= x2 && v1 <= v2) {
		console.log('NO');
		return 'NO';
	}
	do {
		x1 += v1;
		console.log('x1', x1);
		x2 += v2;
		console.log('x2',x2);
	} while (x1 < x2);
	if (x1 === x2) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}

// kangaroo(0, 3, 4, 2);
// kangaroo(0, 2, 5, 3);
kangaroo(63, 8, 94, 3);