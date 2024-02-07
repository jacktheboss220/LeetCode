/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    let sum = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        if (banned.includes(i)) continue;
        if (sum + i > maxSum) continue;
        sum += i;
        count++;
    }
    return count;
};

// console.log(maxCount(banned = [1, 6, 5], n = 5, maxSum = 6));
// console.log(maxCount(banned = [1, 2, 3, 4, 5, 6, 7], n = 8, maxSum = 1));
// console.log(maxCount(banned = [11], n = 7, maxSum = 50));
