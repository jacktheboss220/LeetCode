/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s == "") return true;
    let counter = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[counter] == t[i]) {
            counter++;
            if (counter == s.length) return true;
        }
    }
    return false;
};

console.log(isSubsequence(s = "abc", t = "ahbgdc"));
console.log(isSubsequence(s = "axc", t = "ahbgdc"));