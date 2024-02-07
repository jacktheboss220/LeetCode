/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    // console.log(nums);
    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        // while (i > 0 && nums[i] == nums[i - 1]) i++;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            // console.log(nums[i], nums[left], nums[right]);
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(target - closest) > Math.abs(target - sum)) {
                closest = sum;
            }
            // while (left < right && nums[left] == nums[left + 1]) left++;
            // while (left < right && nums[right] == nums[right - 1]) right--;

            // right--;
            if (sum < target) {
                left++;
                // if (right <= left) {
                //     left++;
                //     right = nums.length - 1;
            }
            else {
                right--;
            }
        }
    }
    return closest;
};

// console.log(threeSumClosest(nums = [-1, 2, 1, -4], target = 1));
console.log(threeSumClosest(nums = [4, 0, 5, -5, 3, 3, 0, -4, -5], target = -2));
// console.log(threeSumClosest(nums = [-1, -1, 2, 1, -4], target = 1));
// console.log(threeSumClosest(nums = [0, 0, 0], target = 1));

