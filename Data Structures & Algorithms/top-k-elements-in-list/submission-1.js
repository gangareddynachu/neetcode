class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        //frequency calculated.. map stores frequency
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]]){
                let count = map[nums[i]]
                count = count+1;
                map[nums[i]] = count;
            }else{
                 map[nums[i]] = 1;
            }
        }
        console.log(map)
        //Now store in buckets
        let bucket = new Array(nums.length);
        Object.keys(map).forEach((key)=>{
           let index = map[key]-1;
           if(Array.isArray(bucket[index])){
            bucket[index].push(key)
           }else{
            bucket[index] = [key];
           }
        });
        console.log(bucket)
        let result = [];
        let j = k;

        for(let i=nums.length-1;i>=0;i--){
            if(Array.isArray(bucket[i])){
                bucket[i].forEach((val)=>{
                    if(j>0){
                        result.push(val)
                        j--;
                    }
                })
            }
        }

        return result;
    }
}
