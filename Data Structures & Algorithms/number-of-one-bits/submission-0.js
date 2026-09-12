class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let result = 0;
        while(n>0){
           if(n%2==1){
             result +=1;
           }
           n = Math.floor(n/2)
        }
        return result;
    }
}
