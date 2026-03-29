class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     
    maxSlidingWindow(nums, k) {
        //Brute Force
        // Take every window of length k and find max and push to result
        //O(n*k)
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
    */
     maxSlidingWindow(nums, k) {
        let  n = nums.length;
    if(n==0|| k==0) return [];
    let result = [];
    let q = [];

    for(let i=0;i<n;i++){
       // when the window starting not match with the starting index of q
     //1. Remove indices that are out of the current window's range
        if(q.length && q[0]<=i-k){
            q.shift(); //it modifes array by shifting all elements to left by one place
        }
        // 2. Remove indices of elements smaller than the current element (nums[i])
        // from the back of the queue (they cannot be the maximum)
        while(q.length && nums[q[q.length-1]]<nums[i]){
            q.pop();
        }
        q.push(i);
        if(i>=k-1){
            result.push(nums[q[0]])
        }


    }
    return result
     }
   
}
