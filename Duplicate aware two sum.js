
duplicateAwareTwoSum = function (arr, target) {
    let obj = [];
    let first = 0, last = first + 1;
    while (first < arr.length - 1) {
        if (arr[first] + arr[last] === target) obj.push([arr[first], arr[last]]);
        last++;
        if (last >= arr.length) {
            first++;
            last = first + 1;
        }
    }
    // return obj;
    return obj.filter((arr, index) => {
        return index === obj.findIndex((obj) => {
            return obj[0] === arr[0] && obj[1] === arr[1];
        });
    });
}

// console.log(duplicateAwareTwoSum(nums = [1, 2, 2, 3, 4, 5], target = 6));
// console.log(duplicateAwareTwoSum(nums = [1, 2, 2, 2, 2], target = 3));
// console.log(duplicateAwareTwoSum(nums = [2], target = 2));
// console.log(duplicateAwareTwoSum(nums = [1, 4, 2, 3, 4, 3, 4], target = 5));
// console.log(duplicateAwareTwoSum(nums = [1, 2, 5, 2, 3, 4, 4, 5, 5, 5], target = 6));
console.log(duplicateAwareTwoSum(nums = [-1, -2, -4, -4, -3, -5, -4, -1], target = -6));