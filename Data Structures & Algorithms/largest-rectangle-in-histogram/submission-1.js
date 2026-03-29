class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
//     largestRectangleArea(heights) {
//        // 1,2,2,4,7,7
//        // 1 3 7
//        let n = heights.length;
//        let largestSoFar = 0;
//        let area =0;

//        for (let i = 0; i < n; i++) {
//     let minHeight = heights[i];
//     for (let j = i; j < n; j++) {
//         // Update the minimum height in the range [i, j]
//         minHeight = Math.min(minHeight, heights[j]);
//         let width = j - i + 1;
//         largestSoFar = Math.max(largestSoFar, minHeight * width);
//     }
// }
//        return largestSoFar;
//     }
 largestRectangleArea(heights) {
     let maxArea =0;
     const stack = [];
     const n = heights.length;
     for(let i=0;i<n;i++){
        let start = i;
        while(stack.length >0 && stack[stack.length - 1][1] > heights[i]){
            const [index,height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i-index));
            start = index;
        }
        stack.push([start,heights[i]])
     }
     for( const [index,height] of stack){
        maxArea = Math.max(maxArea, height * (heights.length - index))
     }
     return maxArea;


 }

}
