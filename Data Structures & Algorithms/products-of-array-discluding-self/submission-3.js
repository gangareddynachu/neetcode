class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /*
    productExceptSelf(nums) {
        //Brute force = O(n2)
        let result = []
         for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }
        result.push(product);
         }
        
        return result;
    }
    */
    productExceptSelf(nums) {
        //optimal approach = O(n)
        /*
        prefix and suffix
        consider an element in array, lets say
        prefix holds product of all left side values to that element
        and suffix holds all right side values to that element
// so the result here is all elements product except the number itself.
        */
         let result = new Array(nums.length).fill(1)
         let leftProduct = 1;
         // nums = [1, 2, 3, 4]
         for (let i = 0; i < nums.length; i++) {
            result[i] = leftProduct;
            leftProduct *= nums[i]
         }
         // result [1,1,2,6]
         let rightProduct = 1;
         for (let j = nums.length-1; j >=0; j--) {
            result[j] *= rightProduct;
            rightProduct *=  nums[j]
        }
    
        
        return result;
    }

}
