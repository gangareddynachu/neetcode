class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /* My approach
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
        } //O(n)
        console.log(map)
        //Now store in buckets // Bucket Sort
        let bucket = new Array(nums.length);
        Object.keys(map).forEach((key)=>{
           let index = map[key]-1;
           if(Array.isArray(bucket[index])){
            bucket[index].push(key)
           }else{
            bucket[index] = [key];
           }
        });  //O(n)
        console.log(bucket)
        let result = [];
        // Traverse from end of bucket array, to find k most elements
        for(let i=nums.length-1;i>=0;i--){
            if(Array.isArray(bucket[i])){
                bucket[i].forEach((val)=>{
                    if(k>0){
                        result.push(val)
                        k--;
                    }else{
                        return result;
                    }
                })
            }
        } //O(n)
        //O(n) + O(n) + O(n) = 3O(n)~= O(n)

        return result;
    }
    */

    /* Referred approach*/
    topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({length:nums.length+1},()=>[]);

        for(const n of nums){
            count[n] = (count[n]||0) + 1;
        }

        for(const n in count){
            freq[count[n]].push(parseInt(n));
        }
        const res = [];
        for(let i = freq.length-1;i>0;i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length ===k){
                    return res;
                }
            }
        }
        return res
    }

}
