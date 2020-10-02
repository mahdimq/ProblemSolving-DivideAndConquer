function findRotationCount(arr) {
	let firstIdx = 0;
	let lastIdx = arr.length - 1;

	while (firstIdx !== lastIdx) {
		let middleIdx = Math.floor((firstIdx + lastIdx) / 2);

		let middleVal = arr[middleIdx];
		let firstVal = arr[firstIdx];
		let lastVal = arr[lastIdx];

		if (middleVal < firstVal || middleVal < lastVal) {
			lastIdx = middleIdx;
		} else {
			firstIdx = middleIdx + 1;
		}
		console.log('first', firstIdx, 'last', lastIdx);
	}
	return firstIdx;
}

module.exports = findRotationCount;
