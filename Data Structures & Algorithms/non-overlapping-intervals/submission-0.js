class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        let result = [];
        intervals.sort((a,b)=>a[0]-b[0]);
        let count = 0;
        result.push(intervals[0]);
        for(let interval of intervals){
            let [start,end] = interval;
            let lastEnd = result[result.length-1][1];
            [[1,2],[2,4],[1,4]]
            if(start < lastEnd){
                count++;
                result[result.length-1][1] = Math.min(end,lastEnd)
            }else{
                result.push([start,end])
            }
        }
        console.log(result)
        return count-1;
    }
}
