class Solution {
    /**
     * @param {string} s
     * @return {number}
     
    lengthOfLongestSubstring(s) {
        let res = 0;
        for(let i=0;i<s.length;i++){
            let charSet = new Set();
            // here we need to start from j = i because we are initalizing new set at beginning of loop and that loop contains no elements so far
            for(let j=i;j<s.length;j++){
                if(charSet.has(s[j])){
                    break;
                }
                charSet.add(s[j])
            }
            res = Math.max(res,charSet.size)
        }
        return res;
    }
    */
    lengthOfLongestSubstring(s) {
        const charSet = new Set();
        let l = 0;
        let res = 0;
        for(let r = 0;r< s.length;r++){
            while(charSet.has(s[r])){
                charSet.delete(s[l]);
                l++;
            }
            charSet.add(s[r]);
            res = Math.max(res,r-l+1)
        }
        return res;
    }
}
