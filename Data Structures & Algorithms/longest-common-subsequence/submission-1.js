class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
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
}
