class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        nums = nums.sort((a,b)=>a-b);
        let left =0;
        let right = nums.length-1;
        let mid;

        // -1, 0 ,3,5,9,12
        /*0 6 mid = 3 3 !=9
            left = 4
            right = 6
        */

        while(left<=right){
             mid = Math.floor((left+right)/2);
             if(nums[mid]==target){
                return mid;
             }else if(nums[mid] < target){
                left = mid+1;
             }else{
                right = mid-1;
             }
        }
        return -1;
    }
}
