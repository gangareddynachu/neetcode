class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums = nums.sort((a,b)=> a-b);
        let res = 0;
        for(let i=0;i<=nums.length;i++){
            if(nums[i]!=res){
                return res;
            }
            res++;
        }
        return -1;
    }
}
