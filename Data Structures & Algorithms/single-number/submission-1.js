class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        // nums = nums.sort();
        // for(let i=0;i<nums.length;i=i+2){
        //     if(nums[i] != nums[i+1]){
        //         return nums[i]
        //     }
        // }

        let res = 0;
        for(const num of nums){
            res ^= num;
        }
        return res;
    }
}
