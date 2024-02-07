/**
 * @param {string} s string to reverse
 * @param {number} k reverse k characters
 * @return {string} reversed string
 */

var reverseStr = function (s, k) {
    let result = '';
    let arr = [];

    for (let i = 0; i < s.length; i += 2 * k) arr.push(s.substring(i, i + 2 * k));

    arr.forEach(item => {
        result += item.substring(0, k).split('').reverse().join('');
        result += item.substring(0 + k, 2 * k);
    });

    return result;
};

// var reverseStr = function (s, k) {
//     let result = '';
//     for (let i = 0; i < s.length; i += 2 * k) {
//         result += s.substring(i, i + k).split('').reverse().join('');
//         result += s.substring(i + k, i + 2 * k);
//     }
//     return result;
// };

var reverseStr = function (s, k) {
    const strArr = s.split('');
    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);
        while (left < right) {
            const temp = strArr[left];
            strArr[left] = strArr[right];
            strArr[right] = temp;
            left++;
            right--;
        }
    }
    return strArr.join('');
}

console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcdegfhijklmnopqrstuvwxyz', 3));
console.log(reverseStr('abcdefg', 8));
console.log(reverseStr('abcd', 2));
console.log(reverseStr('ab', 3));
console.log(reverseStr('a', 2));