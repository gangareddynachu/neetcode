class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let ans = [];
        for(let i=0;i<=n;i++){
            ans.push(this.hammingWeight(i))
        }


        return ans;
    
    }
    hammingWeight(n) {
         let res = 0;
        // while(n){
        //     res += n%2;
        //     n = n>>1;
        // }
        while(n!==0){
           n = n & (n-1);
           res++;
        }

         return res


    }
}
