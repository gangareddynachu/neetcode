class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    /*
    findMedianSortedArrays(nums1, nums2) {
        // let firstArrayIdx = 0
        // let secondArrIdx = 0;
        // let combinedArr = [];
        // for(let i=0;i<nums1.length;i++){
        //     if(nums[firstArrayIdx]> nums2[secondArrIdx]){
        //         result.push(nums2.slice(secondIndex,)
        //     }
        // }
        // O(n)
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
    */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        const total = A.length + B.length;
        const half = Math.floor((total+1)/2);

        if(B.length<A.length){
            [A,B] = [B,A];
        }
        let l =0;
        let r = A.length;
        while(l<=r){
            const i = Math.floor((l+r)/2);
            const j = half - i;

            const Aleft = i>0 ? A[i-1]: Number.MIN_SAFE_INTEGER;
            const Aright = i<A.length ? A[i]: Number.MAX_SAFE_INTEGER;
            const Bleft = j>0 ? B[j-1] : Number.MIN_SAFE_INTEGER;
            const Bright = j< B.length ? B[j] : Number.MAX_SAFE_INTEGER;
            //Found Partition
            if(Aleft <=Bright && Bleft <= Aright){
                if(total%2 != 0){
                    return Math.max(Aleft,Bleft)
                }
                return (Math.max(Aleft,Bleft)+ Math.min(Aright,Bright))/2;
            }else if(Aleft > Bright){
                r = i-1;
            }else{
                l = i+1;
            }
        }
        return -1

    }
}
