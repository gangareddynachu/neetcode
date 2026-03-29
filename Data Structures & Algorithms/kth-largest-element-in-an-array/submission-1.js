class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let minHeap = new MinPriorityQueue();
        for(const num of nums){
          minHeap.enqueue(num)
        }
        while(minHeap.size()>k){
            minHeap.dequeue();
        }
        return minHeap.front();

        
    }
}
