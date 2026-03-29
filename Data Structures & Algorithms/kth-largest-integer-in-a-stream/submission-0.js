class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.nums = nums;
    this.k = k
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
    this.nums.sort((a,b)=>b-a);
    return this.nums[this.k-1];
    }
}
