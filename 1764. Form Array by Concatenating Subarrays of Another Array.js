/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
    let i = 0;
    let j = 0;
    while (i < nums.length && j < groups.length) {
        let k = 0;
        while (k < groups[j].length && i + k < nums.length && nums[i + k] === groups[j][k]) {
            k++;
        }
        if (k === groups[j].length) {
            i += k;
            j++;
        } else {
            i++;
        }
    }
    return j === groups.length;
};



console.log(canChoose(groups = [[1, -1, -1], [3, -2, 0]], nums = [1, -1, 0, 1, -1, -1, 3, -2, 0]));
console.log(canChoose(groups = [[10, -2], [1, 2, 3, 4]], nums = [1, 2, 3, 4, 10, -2]));
console.log(canChoose(groups = [[1, 2, 3], [3, 4]], nums = [7, 7, 1, 2, 3, 4, 7, 7]));