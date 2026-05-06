class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    robTopDown(nums) {
        const memo = new Int32Array(nums.length).fill(-1);
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }
            if (memo[i] !== -1) {
                return memo[i];
            }
            return (memo[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2)));
        };
        return dfs(0);
    }
    rob(nums) {
        if(nums.length === 0) return 0;
        if(nums.length === 1) return nums[0];
        
        const dp = new Array(nums.length).fill(0);

        dp[0] = nums[0];
        dp[1] = Math.max(nums[0],nums[1]);

        for(let i=2;i<nums.length;i++){
            dp[i] = Math.max(dp[i-1],nums[i]+dp[i-2]);
        }

        return dp[nums.length-1];
    }
}
