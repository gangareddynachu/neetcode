class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitTopDown(prices) {
        /* Decision is to buy or sell
        // [1,3,4,0,4]
        // buy-> sell ->

        */
        const dp = {};
        const dfs = (i, buying) => {
            if (i >= prices.length) {
                return 0;
            }
            let key = `${i}-${buying}`;
            if (key in dp) {
                return dp[key];
            }
            let cooldown = dfs(i + 1, buying);
            if (buying) {
                let buy = dfs(i + 1, false) - prices[i];
                dp[key] = Math.max(buy, cooldown);
            } else {
                let sell = dfs(i + 2, true) + prices[i];
                dp[key] = Math.max(sell, cooldown);
            }
            return dp[key];
        };

        return dfs(0, true);
    }
    maxProfit(prices) {
        const n = prices.length;
        const dp = Array.from({length:n+1},()=>[0,0]);
        for(let i=n-1;i>=0;i--){
            for(let buying=1;buying>=0;buying--){
                //Buy scenario
                if(buying ==1){
                    let buy = dp[i+1][0] - prices[i];
                    let cooldown = dp[i+1][1];
                    dp[i][1] = Math.max(buy,cooldown);
                }else{
                    let sell = i+2<n ? dp[i+2][1] + prices[i]: prices[i];
                    let cooldown = dp[i+1][0];
                    dp[i][0] = Math.max(sell,cooldown)

                }

            }
        }
         return dp[0][1];
    }
}
