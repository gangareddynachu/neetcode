class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
     encode(strs) {
        let res = '';
        for (let s of strs) {
            res += s.length + '#' + s;
        }
        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i=0;
        //5#Hello5#World
        while(i<str.length){
            let j = i;
            while(str[j]!=="#"){
                j++;
            }
            let length = parseInt(str.substring(i,j))
            i=j+1;
            j=i+length;
            res.push(str.substring(i,j))
            i=j
        }
        return res;
    }
}
