/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let result = [];
    let n = s.length;
    if (n < 4 || n > 12) return result;

    for (let first = 0; first < array.length - 2; first++) {
        let second = first + 1, third = second + 1;

    }




    function isValid(s) {
        return s.length <= 3 && s.length > 0 && (s[0] !== '0' || s.length === 1) && parseInt(s) <= 255;
    }

    return result;
};


console.log(restoreIpAddresses(s = "25525511135"));
// console.log(restoreIpAddresses(s = "0000"));
// console.log(restoreIpAddresses(s = "101023"));