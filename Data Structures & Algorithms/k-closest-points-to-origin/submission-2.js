class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        //create a map which has key has distance and val as point array
        let obj = {};
        for(let point of points){
            let res = Math.sqrt(point[0]*point[0] + point[1]*point[1]);
            if(obj[res]){
                obj[res].push(point)
            }else{
                obj[res] = [point]
            }
            
        }
        let arr = Object.keys(obj).sort((a,b)=>a-b);
        let result = []
        let i=0;
        while(i<k){
            let arr1 = obj[arr[i]]
            for(let j=0;j<arr1.length;j++){
                result.push(arr1[j]);
                i++;
            }
        }
        return result
    }
}
