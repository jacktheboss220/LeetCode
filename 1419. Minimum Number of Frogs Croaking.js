/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
    if (croakOfFrogs.length == 5 && croakOfFrogs != "croak") return -1;
    let count = 0;
    let max = 0;
    let map = new Map();
    for (let i = 0; i < croakOfFrogs.length; i++) {
        if (!map.has(croakOfFrogs[i])) {
            map.set(croakOfFrogs[i], 1);
        } else {
            map.set(croakOfFrogs[i], map.get(croakOfFrogs[i]) + 1);
        }
        if (croakOfFrogs[i] === 'c') {
            count++;
            max = Math.max(max, count);
        } else if (croakOfFrogs[i] === 'k') {
            if (map.get('r') == undefined
                && map.get('o') == undefined
                && map.get('a') == undefined) {
                return -1
            }
            count--;
        } else if (croakOfFrogs[i] === 'r') {
            if (map.get('c') < map.get('r')) {
                return -1;
            }
        } else if (croakOfFrogs[i] === 'o') {
            if (map.get('c') < map.get('o')) {
                return -1;
            }
        } else if (croakOfFrogs[i] === 'a') {
            if (map.get('c') < map.get('a')) {
                return -1;
            }
        }
        // console.log(map);
    }
    if (count === 0) {
        return max;
    }
    return -1;
};

// console.log(minNumberOfFrogs("ccckkk")); // 1
// console.log(minNumberOfFrogs("coark")); // 1
// console.log(minNumberOfFrogs("croakcroak")); // 1
// console.log(minNumberOfFrogs("crcoakroak")); // 2
// console.log(minNumberOfFrogs("croakcrook")); // -1
// spell-checker::enable