class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s, t) {
        if(t.length>s.length){
            return 0;
        }
        let dp = Array(s.length+1).fill().map(()=> Array(t.length+1).fill(-1))
        const dfs = (i,j) =>{
            if(j==t.length){
                return 1;
            }
            if(i==s.length){
                return 0;
            }
            if(dp[i][j] !==-1) return dp[i][j];
            let res = dfs(i+1,j);
            if(s[i] === t[j]){
                res += dfs(i+1,j+1);
            }
            dp[i][j] = res;
            return res;
        }
        return dfs(0,0);
    }
}
