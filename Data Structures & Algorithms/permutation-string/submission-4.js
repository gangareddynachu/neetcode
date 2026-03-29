class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
    //     let count1 = {};
    //     for(let c of s1){
    //         count1[c] = (count1[c]||0)+1;
    //     }
    //     let need = Object.keys(count1).length;
    //     for(let i =0;i<s2.length;i++){
    //         let count2 = {};
    //         let currMatch = 0;
    //         for(let j = i;j<s2.length;j++){
    //             let c = s2[j];
    //             count2[c] = (count2[c]||0)+1;
    //             if((count1[c]||0)< count2[c]){
    //                 break;
    //             }
    //             if ((count1[c] || 0) === count2[c]) {
    //                 currMatch++;
    //             }
    //             if(currMatch == need){
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
    if(s1.length>s2.length) return false
    let neededChar = {};
    for(let ch of s1){
        neededChar[ch]= (neededChar[ch] || 0) + 1;
    }
    let l = 0;
    let r = 0;
    let requiredSubStringLength = s1.length;
    while(r<s2.length){
        if(neededChar[s2[r]]>0) requiredSubStringLength--;
        neededChar[s2[r]] = (neededChar[s2[r]] || 0) - 1;
        r++;

        if(requiredSubStringLength==0) return true
        if(r-l === s1.length){
            if(neededChar[s2[l]]>=0) requiredSubStringLength++;
            //we need to add character that is going out to needed characters list
            neededChar[s2[l]] = (neededChar[s2[l]] || 0) + 1;
            l++;
        }
    }
    return false
}
}
