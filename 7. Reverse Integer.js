/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    x = x.toString();
    let low = 0; high = x.length - 1;
    while (low < high) {
        if (x[low] == '-') low++;
        let temp = x[low];
        x = x.substring(0, low) + x[high] + x.substring(low + 1);
        x = x.substring(0, high) + temp + x.substring(high + 1);
        low++;
        high--;
    }
    if (parseInt(x) < -2147483648 || parseInt(x) > 2147483647) return 0;
    return parseInt(x);
};

// console.log(reverse(x = 123));
// console.log(reverse(x = -123));
console.log(reverse(x = 120));
// console.log(reverse(x = 1534236469));
// console.log(reverse(x = 1463847412));
