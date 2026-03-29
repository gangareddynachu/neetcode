class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */

    kClosest(points, k) {
        function squaredDis(point) {
            return point[0] * point[0] + point[1] * point[1];
        }
        // a = (1,2) b = (3,4)
        points.sort((a,b)=> squaredDis(a)-squaredDis(b))
        return points.slice(0,k)
    }
}
