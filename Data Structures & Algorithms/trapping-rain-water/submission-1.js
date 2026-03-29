class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    //height = [0,1,0,2,1,0,1,3,2,1,2,1]

    // trap(height) {
    //     if(!height.length)
    //         return 0;
    //     let n = height.length;
    //     let res = 0;
    //     for(let i=0;i<n;i++){
    //         let leftMax = height[i];
    //         let rightMax = height[i];
    //         for(let j=0;j<i;j++){
    //             leftMax = Math.max(leftMax,height[j])
    //         }
    //         for(let j=i+1;j<n;j++){
    //             rightMax = Math.max(rightMax,height[j])
    //         }
    //         res += Math.min(leftMax,rightMax) - height[i];
    //     }
    //     return res;
    // }
//Prefix & Suffix Arrays
     trap(height) {
        let n= height.length;
        if(n==0)
            return 0;
        let leftMax = new Array(n).fill(0);
        let rightMax = new Array(n).fill(0);

        leftMax[0] = height[0];
        for(let i=1;i<n;i++){
            leftMax[i] = Math.max(leftMax[i-1],height[i])
        }
        rightMax[n-1] = height[n-1];
        for(let i=n-2;i>=0;i--){
            rightMax[i] = Math.max(rightMax[i+1],height[i]);
        }
        let res=0;
        for(let i=0;i<n;i++){
            res += Math.min(leftMax[i],rightMax[i])-height[i];
        }
        return res;
     }
}
