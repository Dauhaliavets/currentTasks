// Version 1   duration ( actual: 1996 ms ) should be under 150 ms
// function indexEqualsValue(a) {
// 	return a.findIndex((el, ind) => el === ind);
// }

// Version 2  325 of 1000 Assertions  Execution Timed Out (12000 ms)
// function indexEqualsValue(a) {
// 	for (let key in a) {
// 		if (a[key] === +key) {
// 			return a[key];
// 		}
// 	}
//     return -1;
// }

// Version 3  107 of 1000 Assertions   Execution Timed Out (12000 ms)
// function indexEqualsValue(a) {
// 	let obj = Object.assign({}, a);
// 	for (let value in obj) {
// 		if (obj[value] === +value) {
// 			return +value;
// 		}
// 	}
// 	return -1;
// }

// Version 4   duration ( actual: 348 ms ) should be under 150 ms
// function indexEqualsValue(a) {
// 	let len = a.length;
// 	for (let i = 0; i < len; i++) {
// 		if (a[i] === i) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// Version 5 BinarySearch !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function indexEqualsValue(a) {
	let left = 0;
	let right = a.length;
	let mid;

	while (left <= right) {
		mid = Math.floor((left + right) / 2);

		if (a[mid] === mid) {
			for (let i = 5; i >= 0; i--) {
				if (a[mid - i] === mid - i) {
					return mid - i;
				}
			}
		} else if (a[mid] > mid) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
}