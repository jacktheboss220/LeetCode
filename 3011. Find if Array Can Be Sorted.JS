/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
    function toBit(n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return toBit(parseInt(n / 2)) * 10 + (n % 2);
    }
    let left = 0;
    let right = left + 1;

    while (right < nums.length - 1) {
        let leftBit = toBit(nums[left]);
        let rightBit = toBit(nums[right]);

        console.log(nums[left] >> nums[right]);
        
        left++;
        right++;

    }
};

console.log(canSortArray(nums = [8, 4, 2, 30, 15]));
// console.log(canSortArray(nums = [1, 2, 3, 4, 5]));
// console.log(canSortArray(nums = [3, 16, 8, 4, 2]));