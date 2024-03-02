/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustCount = new Array(n + 1).fill(0);
    for (let [a, b] of trust) {
        trustCount[a]--;
        trustCount[b]++;
    }
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) {
            return i;
        }
    }
    return -1;
};