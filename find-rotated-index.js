function findRotatedIndex(arr, target) {
	let firstIdx = 0;
	let lastIdx = arr.length - 1;

	while (firstIdx <= lastIdx) {
		let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
		if (arr[middleIdx] === target) return middleIdx;

		// CHECK IF ARRAY IS ROTATED
		// If middle number is larger than first number
		if (arr[middleIdx] >= arr[firstIdx]) {
			// if first number is less than target num and target less than middle number
			if (arr[firstIdx] <= target && target < arr[middleIdx]) {
				lastIdx = middleIdx - 1; //<-- set last index as one before middle index
			} else {
				firstIdx = middleIdx + 1; //<-- set first index as one after middle index
			}
		} else {
			firstIdx = middleIdx + 1;
			lastIdx = middleIdx - 1;

			// // if middle number is larger or equal to target
			// if (target >= arr[middleIdx]) {
			// 	firstIdx = middleIdx + 1; //<-- set first index to one after middle index
			// } else {
			// 	lastIdx = middleIdx - 1; //<-- set last index to one before middle index
			// }
		}
	}
	return -1; //<-- else return -1
}

module.exports = findRotatedIndex;
