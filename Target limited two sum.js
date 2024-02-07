function targetLimitedTwoSum(arr, target) {
    // let result = -1;
    // let first = 0, last = first + 1;
    // while (first < arr.length - 1) {
    //     if ((arr[first] + arr[last]) < target && result < (arr[first] + arr[last]))
    //         result = (arr[first] + arr[last])
    //     last++;
    //     if (last >= arr.length) {
    //         first++;
    //         last = first + 1;
    //     }
    // }
    // return result;

    let maxSum = -1;
    for (let first = 0; first < arr.length - 1; first++) {
        for (let last = first + 1; last < arr.length; last++) {
            const currentSum = arr[first] + arr[last];
            if (currentSum < target && currentSum > maxSum) {
                maxSum = currentSum;
            }
        }
    }
    return maxSum;
}

// console.log(targetLimitedTwoSum(arr = [34, 23, 1, 24, 75, 33, 54, 8], target = 60));
// console.log(targetLimitedTwoSum(arr = [34, 23, 1, 24, 75, 33, 54, 8], target = 36));
// console.log(targetLimitedTwoSum(arr = [10, 20, 30], target = 15));
// console.log(targetLimitedTwoSum(arr = [-2, 0, -3, 5, 7, -5], target = 1));
// console.log(targetLimitedTwoSum(arr = [-1, -5, -3, -4], target = -2));
// console.log(targetLimitedTwoSum(arr = [10, 20], target = 9));
console.log(targetLimitedTwoSum(arr = [10], target = 90));

