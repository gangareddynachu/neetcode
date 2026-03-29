class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
/*O(nlogn) Approach
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
*/

    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let set = new Set(nums)
        let maxLength = 0;  // At least 1 element exists
        for(let num of nums){
            //only start counting if previous of current number does not exists in array
            if(!set.has(num-1)){
                let currentNum = num;
                let currentLength = 1;
                while(set.has(currentNum+1)){
                    currentNum++;
                    currentLength++
                }
                maxLength = Math.max(maxLength,currentLength)
            }
        }
        return maxLength;
    }


}
