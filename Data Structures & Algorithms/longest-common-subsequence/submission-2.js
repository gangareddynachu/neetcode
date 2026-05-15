class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequenceTopDown(text1, text2) {
        let result = 0;
        const n1 = text1.length;
        const n2 = text2.length;
        const memo = Array(text1.length).fill().map(()=>Array(text2.length).fill(-1))


        const dfs = (index1,index2)=>{
            if(index1>=n1 || index2>=n2){
                return 0;
            }
            if(memo[index1][index2] !==-1){
                return memo[index1][index2];
            }
            if(text1[index1] == text2[index2]){
               memo[index1][index2] =   1+ dfs(index1+1,index2+1);
            }else{
                memo[index1][index2] = Math.max(dfs(index1+1,index2),dfs(index1,index2+1))
            }
            return memo[index1][index2]
        }
        return dfs(0,0)

    }
    longestCommonSubsequence(text1, text2) {
        const dp = Array(text1.length + 1)
            .fill()
            .map(() => Array(text2.length + 1).fill(0));

        for (let i = text1.length - 1; i >= 0; i--) {
            for (let j = text2.length - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                } else {
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
                }
            }
        }

        return dp[0][0]
    }
}
