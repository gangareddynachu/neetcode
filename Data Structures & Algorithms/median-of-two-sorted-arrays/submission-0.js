class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // let firstArrayIdx = 0
        // let secondArrIdx = 0;
        // let combinedArr = [];
        // for(let i=0;i<nums1.length;i++){
        //     if(nums[firstArrayIdx]> nums2[secondArrIdx]){
        //         result.push(nums2.slice(secondIndex,)
        //     }
        // }
        nums1 = nums1.concat(nums2).sort((a,b)=>a-b);
        let median = -1;
        let n = nums1.length;
        if(n%2 == 0){
            median = (nums1[Math.floor((n)/2)]+nums1[Math.floor((n)/2)-1])/2 ;

        }else{
             median = nums1[Math.floor((n-1)/2)]
        }
        return median
    }
}
