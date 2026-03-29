class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        //Brute Force
        // Take every window of length k and find max and push to result
        let result = [];
        for(let i=0;i<nums.length-k+1;i++){
            let maxInWindow = nums[i];
            let nums1 = nums.slice(i,i+k);
            for(let num of nums1){
                maxInWindow = Math.max(maxInWindow,num)
            }
            result.push(maxInWindow)
        }
         return result;
    }
   
}
