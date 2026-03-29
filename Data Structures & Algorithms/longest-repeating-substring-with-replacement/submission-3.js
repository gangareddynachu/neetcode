class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // characterReplacement(s, k) {
    //     let res = 0;
    //     for(let i=0;i<s.length;i++){
    //         let count = new Map();
    //         let maxF = 0;
    //         for(let j=i;j<s.length;j++){
    //             count.set(s[j],(count.get(s[j]) || 0) +1);
    //             maxF = Math.max(maxF,count.get(s[j]));
    //             if(j-i+1-maxF <=k){
    //                 res = Math.max(res,j-i+1);
    //             }
    //         }
    //     }
    //     return res;
    // }
    characterReplacement(s, k) {
        let count = new Map();
        let res = 0;

        let l = 0,
            maxf = 0;
        for (let r = 0; r < s.length; r++) {
            count.set(s[r], (count.get(s[r]) || 0) + 1);
            maxf = Math.max(maxf, count.get(s[r]));

            while (r - l + 1 - maxf > k) {
                count.set(s[l], count.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
