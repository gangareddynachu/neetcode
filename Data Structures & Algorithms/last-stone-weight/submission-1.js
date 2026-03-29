class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
          while(stones.length>1){
            stones = stones.sort((a,b)=>b-a)
            let x =  stones.shift();
            let y =  stones.shift();
            if(x>y){
                stones.push(x-y);
            }
    }
        return stones[0] ? stones[0] : 0;
        
    }
}
