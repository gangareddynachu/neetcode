class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // [1,2,3,2,2]
        for(let num of nums){
            let index = Math.abs(num) -1;
            if(nums[index]<0){
                return Math.abs(num)
            }
            nums[index] *= -1;
        }

    }
}
