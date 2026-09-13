class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
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
