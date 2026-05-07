class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0;
        let resIdx = 0;
//ababd
        for(let i=0;i<s.length;i++){
            //odd length
            let l = i;
            let r = i;
//b
// 0
//2-0+1 = 3
            while(l>=0 && r<s.length && s.charAt(l)===s.charAt(r)){
                if(r-l+1>resLen){
                    resIdx = l;
                    resLen = r-l+1;
                }
                l--;
                r++;
            }

            //even length
            l = i;
            r = i+1;
            while(l>=0 && r<s.length && s.charAt(l) === s.charAt(r)){
                if(r-l+1>resLen){
                    resIdx = l;
                    resLen = r-l+1;
                }
                l--;
                r++;
            }
        }
        return s.substring(resIdx,resIdx+resLen);

    }
}
