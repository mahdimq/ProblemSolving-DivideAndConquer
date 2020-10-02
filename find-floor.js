// function findFloor(arr, target) {
// 	let firstIdx = 0;
// 	let lastIdx = arr.length - 1;

// 	while (firstIdx !== lastIdx) {
// 		let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
// 		let middleVal = arr[middleIdx];

// 		if (middleVal === target) return middleVal;
// 		if (arr[middleIdx - 1] <= target && target < middleVal) return arr[middleIdx - 1];
// 		if (arr[middleIdx - 1] > target && middleVal <= target) return middleVal;
// 		if (middleVal > target) {
// 			lastIdx = middleIdx - 1;
// 		} else {
// 			if (arr[lastIdx] <= target) {
// 				firstIdx = middleIdx + 1;
// 			} else {
// 				lastIdx = middleIdx - 1;
// 			}
// 		}
// 	}
// 	if (arr[firstIdx] > target) return -1;
// 	else return arr[lastIdx];
// }

function findFloor(arr, num, low = 0, high = arr.length - 1) {
	if (low > high) return -1;
	if (num >= arr[high]) return arr[high];

	let mid = Math.floor((low + high) / 2);

	if (arr[mid] === num) return arr[mid];

	if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
		return arr[mid - 1];
	}

	if (num < arr[mid]) {
		return findFloor(arr, num, low, mid - 1);
	}

	return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;
