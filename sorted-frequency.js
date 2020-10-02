function sortedFrequency(arr, target) {
	// SET VALUES FOR FIRST LOOP
	let firstIdx = 0;
	let lastIdx = arr.length - 1;
	let middleIdx = Math.floor((firstIdx + lastIdx) / 2);

	// GET THE INDEX OF FIRST OCCURRENCE - LEFT INDEX OF TARGET
	while (!(arr[middleIdx - 1] < target && arr[middleIdx] === target)) {
		// If the middle index is the first index of target
		if (middleIdx === 0) {
			firstIdx = middleIdx; //<-- set the first index as middle index
			break; //<-- break loop
		} else if (firstIdx === arr.length) return -1; //<-- if target doesn't exist

		// If the middle value is less than target value
		if (arr[middleIdx] < target) {
			firstIdx = middleIdx + 1; //<-- set first index as the index after middle index
		} else if (arr[middleIdx] >= target) {
			lastIdx = middleIdx - 1; //<-- set the last index as the index before middle index
		}

		// RESET THE MIDDLE INDEX
		middleIdx = Math.floor((firstIdx + lastIdx) / 2);
	}

	const leftIndex = firstIdx; //<-- save first occurrence of target to variable

	// RESET THE VALUES FOR THE SECOND LOOP
	firstIdx = 0;
	lastIdx = arr.length - 1;
	middleIdx = Math.floor((firstIdx + lastIdx) / 2);

	// GET THE INDEX OF LAST OCCURRENCE - RIGHT INDEX OF TARGET
	while (!(arr[middleIdx + 1] > target && arr[middleIdx] === target)) {
		// If the middle index is the last index of target
		if (middleIdx === lastIdx) {
			lastIdx = middleIdx; //<-- set the last index as middle index
			break; //<-- break loop
		} else if (middleIdx === -1) return -1; //<-- if target doesn't exist

		// If the middle value is greater than target value
		if (arr[middleIdx] > target) {
			lastIdx = middleIdx - 1; //set the last index as the index before middle index
		} else if (arr[middleIdx] <= target) {
			firstIdx = middleIdx + 1; //<-- set first index as the index after middle index
		}

		// RESET THE MIDDLE INDEX
		middleIdx = Math.floor((firstIdx + lastIdx) / 2);
	}

	const rightIndex = lastIdx; //<-- save last occurrence of target to variable

	if (leftIndex === rightIndex) return 1; //<-- if only one element in array

	console.log(`LEFT INDEX: ${leftIndex}, RIGHT INDEX: ${rightIndex}`);
	console.log('COUNT: ', rightIndex - leftIndex);
	return rightIndex - leftIndex;
}

module.exports = sortedFrequency;
