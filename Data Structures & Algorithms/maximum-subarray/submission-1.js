class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        let result = nums[0];
        for(let i=0;i<nums.length;i++){
            let curSubSum = 0;
            for(let j=i;j<nums.length;j++){
                curSubSum += nums[j];
                result = Math.max(curSubSum,result)
            }
        }
        return result;
    }
}
