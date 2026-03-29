class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    /*Brute Force +> O(m*n) => n = length of piles = m is maximum number of bananas in a pile
     minEatingSpeed(piles, h){
        let speed = 1;
        while(true){
            let totalTime = 0;
            for(let pile of piles){
                totalTime += Math.ceil(pile/speed)
            }
            if(totalTime<=h){
                return speed;
            }
            speed++
            
        }
      }
    /*
    */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while(l<=r){
            let k = l + Math.floor(( r-l) / 2);
            let hours = 0;
            for (let p of piles) {
                hours += Math.ceil(p / k);
            }
            if(hours<=h){
                res = Math.min(res,k);
                r = k-1;
            }else{
                l = k+1;
            }
        }
        return res;
        
    }
}