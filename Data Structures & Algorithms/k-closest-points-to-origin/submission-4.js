class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    kClosest(points, k) {
        function squareDistance(point){
            return point[0]**2 + point[1]**2
        }
        let minHeap = new MinPriorityQueue((point)=> point[0]);
        for(let point of points){
              minHeap.enqueue([squareDistance(point),point[0],point[1]])
        }
        const res = [];
        for(let i=0;i<k;i++){
            const [_,x,y] = minHeap.dequeue();
            res.push([x,y])
        }
        return res;
      
    }
}
