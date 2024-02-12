/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    if (nums.length < 3) return result;
    nums = nums.sort((a, b) => a - b);
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = n - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4]));
// console.log(threeSum(nums = [0, 1, 1]));
// console.log(threeSum(nums = [0, 0, 0]));
// console.log(threeSum(nums = [0, 0, 0, 0]));
// console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
// console.log(...new Set([[-1, -1, 2], [-1, 0, 1], [-1, 0, 1]]));