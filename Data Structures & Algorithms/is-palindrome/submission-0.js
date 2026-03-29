class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let n = s.length;
        let left = 0;
        let right = n-1;
        while(left<right && right>0){
            if(s[left]!= s[right]){
                return false;
            }
                
            left++;
            right--;
        }
        return true
    }
}
