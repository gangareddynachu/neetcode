class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    if (nums.length === 0) return 0;
    
    nums = nums.sort((a, b) => a - b);
    let maxLength = 1;  // At least 1 element exists
    let currentLength = 1;  // Count current element
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else if (nums[i + 1] === nums[i]) {
            continue;  // Skip duplicates
        } else {
            currentLength = 1;  // Start new sequence
        }
    }
    return maxLength;
}
}
