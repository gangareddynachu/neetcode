class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let n = nums.length;
        let result = nums[0];
        let currSum = 0;
        for(let i=0;i<nums.length;i++){
            if(currSum<0){
                currSum = 0;
            }
            currSum += nums[i]
            result = Math.max(currSum,result)
        }
        return result;
    }
}
