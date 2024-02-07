/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    if (nums.length < 3) return nums;
    nums = nums.sort((a, b) => a - b);
    console.log(nums.join(" "));
    let first = 0, second = first + 1, third = nums.length - 1;
    while (first < nums.length - 2) {
        if (nums[first] > 0) break;
        console.log(first, ":", second, ":", third, " | ", nums[first], nums[second], nums[third], " | ", (nums[first] + nums[second] + nums[third]));
        let sum = 0 - nums[first];
        while (first > 0 && nums[first] == nums[first + 1]) {
            first++;
            second = first - 1;
        }
        while (second > 0 && nums[second] == nums[second + 1]) {
            second++;
            if (second >= nums.length - 1) {
                first++;
                second = first + 1;
                third = nums.length - 1;
            }
        }
        while (third > nums.length - 1 && nums[third] == nums[third - 1]) {
            third--;
            if (third <= first) {
                second++;
                third = nums.length - 1;
            }
        }
        if (sum == (nums[second] + nums[third])) {
            // console.log(first, ":", second, ":", third, " | ", nums[first], nums[second], nums[third], " | ", (nums[first] + nums[second] + nums[third]));
            // console.log((0 - nums[first]), (nums[second] + nums[third]));
            result.push([nums[first], nums[second], nums[third]]);
        }
        third--;
        if (third <= first) {
            second++;
            third = nums.length - 1;
        }
        if (second >= nums.length - 1) {
            first++;
            second = first + 1;
            third = nums.length - 1;
        }
    }
    return result;
    // .map(r => r.sort()).filter((arr, index) => {
    //     return index === result.findIndex((obj) => {
    //         return obj[0] === arr[0] && obj[1] === arr[1] && obj[2] === arr[2];
    //     });
    // });
};

console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4]));
// console.log(threeSum(nums = [0, 1, 1]));
// console.log(threeSum(nums = [0, 0, 0]));
// console.log(threeSum(nums = [0, 0, 0, 0]));
// console.log(threeSum(nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
// console.log(...new Set([[-1, -1, 2], [-1, 0, 1], [-1, 0, 1]]));