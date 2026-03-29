class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var a = s.split('').sort().join('');
        var b = t.split('').sort().join('');
        return a === b;
    }
}
