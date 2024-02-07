/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function (n, x) {
    let isNegative = n[0] === '-';
    let i = isNegative ? 1 : 0;
    while (i < n.length && (isNegative ? n[i] <= x : n[i] >= x)) {
        i++;
    }
    return n.slice(0, i) + x + n.slice(i);
};

console.log(maxValue(n = "12345", x = 9));
console.log(maxValue(n = "99", x = 9));
console.log(maxValue(n = "-13", x = 2));
console.log(maxValue(n = "-132", x = 3));
console.log(maxValue(n = "962942516613939", x = 3));