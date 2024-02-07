/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim().split(/\s+/).reverse().join(" ");
    return s;
    // if (s == undefined) return s;
    // s = s.trim();
    // if (s.indexOf(" ") == -1) return s;
    // return s.substring(s.lastIndexOf(" ")).trim() + " " + reverseWords(s.substring(0, s.lastIndexOf(" "))).trim();

    // s = s.trim() + ' ';
    // let p = 0, p1 = s.length;
    // for (let i = 0; i < s.length; i++) {
    //     if (i == p1) return s.substring(i).trim();
    //     if (s.charAt(i) == ' ') {
    //         s = s.substring(0, p1).concat(s.substring(p, i).trim() + " ", s.substring(p1).trim());
    //         p = i + 1;
    //     }
    // }

};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
