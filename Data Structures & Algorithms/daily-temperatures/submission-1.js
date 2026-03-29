class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    //O(n2)
    // dailyTemperatures(temperatures) {
    //     let result = [];
    //     let count = 0;
    //     for(let i=0;i<temperatures.length;i++){
    //         count = 0;
    //         for(let j=i+1;j<temperatures.length;j++){    
    //             if(temperatures[j]>temperatures[i]){
    //                 count = count+1;
    //                 result.push(count++);
    //                 break;
    //             }else{
    //                 count++;
    //             }
    //         }
    //         if(!result[i]){
    //             result[i] = 0;
    //         }

    //     }
    //     return result;
    // }

    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);;
        let stack = [];
        //[30,38,30,36,35,40,28]
        // result = [1,0.1]
/*


*/
        for(let i=0;i<temperatures.length;i++){
            const temp = temperatures[i];
            while(stack.length>0 && temp > stack[stack.length-1][0]){
                const [temp,stackInd] = stack.pop();
                result[stackInd] = i - stackInd;
            }
            stack.push([temp,i]);

        }
        return result;
    }
}
