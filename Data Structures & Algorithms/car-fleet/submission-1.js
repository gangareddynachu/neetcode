class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // const cars = position.map((pos, i) => [pos, speed[i]]);
        // cars.sort((a, b) => b[0] - a[0]);

        // let fleets = 0;
        // let maxTime = 0;
        // for (const [pos, spd] of cars) {
        //     const time = (target - pos) / spd;
        //      if (time > maxTime) {
        //         fleets++;
        //         maxTime = time;
        //      }
        // }
        // return fleets;

        //Stack Approach
        let pair = position.map((p,i)=>[p,speed[i]]);
        pair.sort((a,b)=>b[0]-a[0]);
        let stack = [];
        for(let [p,s] of pair){
            stack.push((target-p)/s);
            if(stack.length>=2 && stack[stack.length-1] <= stack[stack.length-2]){
                stack.pop();
            }
        }
        return stack.length;




        // for(let i=0;i<position.length;i++){
        //     let matching = (target - position[i])/speed[i]
        //     console.log(matching)
        //     for(let j = 0 ;j<position.length;j++){
        //         var matchingCount = 0
        //         let a = (target - position[j])/speed[j];
        //         if(a == matching)
        //             matchingCount++;
        //     }
        //     fleetCount = matchingCount? fleetCount+ matchingCount : fleetCount++
            
        // }
        // return fleetCount;

    }
}
