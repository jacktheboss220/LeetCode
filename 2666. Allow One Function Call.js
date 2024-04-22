/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
	return function (...args) {
		if (!fn) return;
		let result = fn(...args);
		fn = null;
		return result;
	};
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

console.log(once((a, b, c) => (a + b + c))(1, 2, 3)); // 6