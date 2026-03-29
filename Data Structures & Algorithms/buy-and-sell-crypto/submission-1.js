class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
   
    maxProfit(prices) {
        let result = 0;
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
               result = Math.max(prices[j]-prices[i],result)
            }
        }
        return result;
    }
      */
      maxProfit(prices) {
        let leftMinSoFar = prices[0];
        let profit = 0;
        for(let i = 1;i<prices.length;i++){
            leftMinSoFar = Math.min(leftMinSoFar,prices[i-1]);
            profit = Math.max(profit,prices[i]- leftMinSoFar)
        }
        return profit;

      }


}
