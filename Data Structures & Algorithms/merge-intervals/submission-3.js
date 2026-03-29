class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        // [[1,3],[1,5],[6,7]]
        intervals.sort((a,b)=> a[0]-b[0])
        let result = [];
        result.push(intervals[0]);
        for(let interval of intervals){
            let [start,end] = interval;
            let lastEnd = result[result.length-1][1];
            if(start<=lastEnd){
                result[result.length-1][1] = Math.max(end,lastEnd);
            }else{
                result.push([start,end])
            }
        }
        return result;
    }
}
