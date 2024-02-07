/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */

var getMinDistance = function (nums, target, start) {

    // let count_left = 0, count_right = 0;
    // let i_left = start, i_right = start;
    // let flag_left = false, flag_right = false;

    // for (; i_left < nums.length; i_left++) {
    //     if (nums[i_left] == target) {
    //         flag_left = true;
    //         break;
    //     }
    //     else ++count_left;
    // }

    // for (; i_right >= 0; i_right--) {
    //     if (nums[i_right] == target) {
    //         flag_right = true;
    //         break;
    //     }
    //     else ++count_right;
    // }

    // if (flag_left == true && flag_right == true) return Math.abs(((count_left > count_right) ? i_right : i_left) - start);
    // else if (flag_left) return Math.abs(i_left - start);
    // else if (flag_right) return Math.abs(i_right - start);

    // let minDistance = Infinity;

    // for (let i = start; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         minDistance = Math.min(minDistance, Math.abs(i - start));
    //         break; 
    //     }
    // }

    // for (let i = start - 1; i >= 0; i--) {
    //     if (nums[i] === target) {
    //         minDistance = Math.min(minDistance, Math.abs(start - i));
    //         break;
    //     }
    // }

    // return minDistance;

    let low = start, high = start;
    console.log(low, high, start);
};


console.log(getMinDistance([1, 2, 3, 4, 5], 5, 3));
console.log(getMinDistance([1], 1, 0));
console.log(getMinDistance([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1, 0));
console.log(getMinDistance([5, 3, 6], 5, 2));
console.log(getMinDistance([1, 5, 3, 4, 5], 5, 2));