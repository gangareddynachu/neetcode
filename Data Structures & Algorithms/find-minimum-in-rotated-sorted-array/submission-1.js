class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    //Brute Force
    /*
    findMin(nums) {
        return nums.sort()[0]
    }
    */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        let rotation = 0;
        while(left<right){
            if(nums[left]>nums[right]){
                rotation++;
                left++;
            }else{
            break;
            }
        }
        return rotation>0 ? nums[left] : nums[0]
    }
}
