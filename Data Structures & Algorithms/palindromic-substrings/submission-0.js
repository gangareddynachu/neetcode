class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let resLen = 0;
        let resIdx = 0;
        let count = 0;
        for(let i=0;i<s.length;i++){
            //odd length
            let l = i;
            let r = i;
            while(l>=0 && r<s.length && s.charAt(l)===s.charAt(r)){
                // if(r-l+1>resLen){
                //     resIdx = l;
                //     resLen = r-l+1;
                // }
                count++
                l--;
                r++;
            }
            //even length
            l = i;
            r = i+1;
            while(l>=0 && r<s.length && s.charAt(l) === s.charAt(r)){
                // if(r-l+1>resLen){
                //     resIdx = l;
                //     resLen = r-l+1;
                // }
                count++;
                l--;
                r++;
            }
        }
        return count;
    }
}
