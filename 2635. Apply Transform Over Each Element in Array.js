/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
	return arr.map(fn);
};

console.log(map([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
console.log(map([1, 2, 3], (x) => x + 1)); // [2, 3, 4]
console.log(map([1, 2, 3], (x) => x - 1)); // [0, 1, 2]
