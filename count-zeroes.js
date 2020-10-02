function countZeroes(arr) {
	let firstIdx = 0;
	let lastIdx = arr.length - 1;

	while (firstIdx <= lastIdx) {
		let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
		let middleValue = arr[middleIdx];

		if (middleValue === 0) {
			lastIdx = middleIdx - 1;
		} else if (middleValue === 1) {
			firstIdx = middleIdx + 1;
		}
	}
	return arr.length - lastIdx - 1;
}

module.exports = countZeroes;
