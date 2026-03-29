class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = [];
        let count = 0;
        for(let i=0;i<temperatures.length;i++){
            count = 0;
            for(let j=i+1;j<temperatures.length;j++){    
                if(temperatures[j]>temperatures[i]){
                    count = count+1;
                    result.push(count++);
                    break;
                }else{
                    count++;
                }
            }
            if(!result[i]){
                result[i] = 0;
            }

        }
        return result;
    }
}
