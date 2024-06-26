/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {

    let numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
};