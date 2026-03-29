class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // search(nums, target) {
    //     return nums.indexOf(target);
    // }
    // search(nums, target) {
    //     let left = 0;
    //     let right = nums.length-1;
    //     while(left<=right){
    //         let mid = left + Math.floor((right-left)/2);
    //         if(target == nums[mid] ){
    //             return mid
    //         }
    //         if (nums[left] <= nums[mid]) {
    //             if (target > nums[mid] || target < nums[left]) {
    //                 left = mid + 1;
    //             } else {
    //                 right = mid - 1;
    //             }
    //         } else {
    //             if (target < nums[mid] || target > nums[right]) {
    //                 right = mid - 1;
    //             } else {
    //                 left = mid + 1;
    //             }
    //         }
    //     }
    //     return -1;
        
    // }
    search(nums, target){
        let left = 0;
        let right = nums.length-1;
        let mid;
        while(left<right){
            mid = left + Math.floor((right-left)/2);
            if(nums[mid]>nums[right]){
                left = mid+1
            } else{
                right = mid;
            }
        }
        let pivot = left;
        left = 0;
        right = nums.length-1;
        if(nums[pivot]<= target  && target <= nums[right]){
            //right side of pivot
            left = pivot;
        }else{
            //left side of pivot
            right = pivot-1
        }

        while(left<=right){
            mid = left + Math.floor((right-left)/2);
            if(nums[mid]===target){
                return mid;
            } else if(nums[mid]< target){
                left = mid +1;
            }else{
                right = mid-1;
            }

        }
        return -1;


    }
}
