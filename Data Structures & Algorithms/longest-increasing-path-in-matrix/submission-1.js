class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        const directions = [
            [-1,0],[1,0],[0,-1],[0,1]
        ]
        const rows = matrix.length,
        cols = matrix[0].length;
        let dp = Array.from({length:rows},()=> Array(cols).fill(-1));
        const dfs = (r,c, preVal)=>{
            if(r<0 || r>=rows || c<0 || c>=cols || matrix[r][c] <=preVal){
                return 0;
            }
            if(dp[r][c]!==-1) return dp[r][c];
            let res = 1;
            for(let d of directions){
                res = Math.max(res,1+dfs(r+d[0],c+d[1],matrix[r][c]))
            }
            dp[r][c] = res;
            return res;

        }
        let result = 0;
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                result = Math.max(result,dfs(r,c,-Infinity))
            }
        }
        return result;
    }
}
