class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let s = S;
        let lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;  // keeps overwriting → ends up as last index
    }

    let result = [];
    let size = 0;
    let boundary = 0;

     for (let i = 0; i < s.length; i++) {
            size++;
            boundary = Math.max(boundary, lastIndex[s[i]]);
            if (i === boundary) {
                result.push(size);
                size = 0;
            }
        }

    return result; 
    }
}
