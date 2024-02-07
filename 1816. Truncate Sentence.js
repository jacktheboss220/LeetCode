/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    // return s.split(' ').filter((item, index) => index < k).join(' ');
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == " ") ++count;
        if (count == k) return s.substring(0, i);
        if (i == s.length - 1) return s;
    }
};


console.log(truncateSentence(s = "Hello how are you Contestant", k = 4));
console.log(truncateSentence(s = "What is the solution to this problem", k = 4));
console.log(truncateSentence("chopper is not a tanuki", k = 5));