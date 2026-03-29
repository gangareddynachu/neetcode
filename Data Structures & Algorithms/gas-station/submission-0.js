class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let sum1 = 0;
        let sum2 = 0;
        gas.map((x)=> sum1 +=x);
        cost.map((x)=> sum2 +=x)
        if(sum1<sum2){
            return -1;
        }
        let total = 0;
        let res = 0;
        for(let i=0;i<gas.length;i++){
            let diff = gas[i]-cost[i];
            total +=diff;
            if(total<0){
                total = 0;
                res = i+1;
            }
        }
        return res;
    }
}
