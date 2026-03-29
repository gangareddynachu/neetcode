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
        let mp = new Map();
        let l = 0;
        let res = 0;
//zxyzxyz
        for(let r = 0;r<s.length;r++){
            if(mp.has(s[r])){
                l = Math.max(mp.get(s[r])+1,l);
            }/*
            z,0
            res = max(0,0-0+1) = 1
            x,1
            res = max(0,1-0+1) = 2
            y,2
            res = max(0,1-0+1) = 2
            
            z,3
            l = max(0+1,0) = 1
            res = max(3-1+1,2) = 3

            x,4
            l = max(1+1,1) = 2
            res = max(3,4-2+1) = 3



            */
            mp.set(s[r],r);
            res = Math.max(res,r-l+1)
        }
        return res;
    }
}
