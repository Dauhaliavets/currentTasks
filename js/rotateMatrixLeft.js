
// rotate a matrix 90 degree to the left
var rotateMatrix = (arr) => {
	let column = arr.length;
	let row = arr[0].length;
	let resArr = [];

	for (let i = row - 1; i >= 0; i--) {
		let subArr = [];
		for (let j = 0; j < column; j++) {
			subArr[j] = arr[j][i];
		}
		resArr.push(subArr);
	}

	return resArr;
};

console.log(
	rotateMatrix([
		[-1, 4, 5],
		[2, 3, 4],
	])
);