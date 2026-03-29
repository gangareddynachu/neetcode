class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // search(nums, target) {
    //     let left =0;
    //     let right = nums.length-1;
    //     let mid;

    //     // -1, 0 ,3,5,9,12
    //     /*0 6 mid = 3 3 !=9
    //         left = 4
    //         right = 6
    //     */

    //     while(left<=right){
    //          mid = Math.floor((left+right)/2);
    //          if(nums[mid]==target){
    //             return mid;
    //          }else if(nums[mid] < target){
    //             left = mid+1;
    //          }else{
    //             right = mid-1;
    //          }
    //     }
    //     return -1;
    // }
    binary_search(l,r,nums,target){
        if(l>r) return -1;
        let m = l+ Math.floor((r-l)/2);
        if(nums[m] == target) return m;
        return nums[m]<target ? this.binary_search(m + 1, r, nums, target)
        : this.binary_search(l, m-1, nums, target)
    }
    search(nums, target) {
        return this.binary_search(0, nums.length - 1, nums, target);
    }


}
