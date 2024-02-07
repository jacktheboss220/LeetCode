/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            let sub = s.substring(j, i);
            if (dp[j] && wordDict.includes(sub)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

console.log(wordBreak(s = "leetcode", wordDict = ["leet", "code"]));
console.log(wordBreak(s = "applepenapple", wordDict = ["apple", "pen"]));
console.log(wordBreak(s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]));