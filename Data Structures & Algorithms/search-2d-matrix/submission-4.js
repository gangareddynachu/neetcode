class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    /* O(m*n)
    searchMatrix(matrix, target) {
        let colsLength = matrix[0].length;
        console.log("colLen"+ colsLength)
        let rowsLength = matrix.length
        console.log("rowLen"+ rowsLength)
       

        for(let i=0;i<rowsLength;i++){
             for(let j=0;j<colsLength;j++){
                if(matrix[i][j] == target){
                    return true;
                }
             }
        }
        return false
    }
    *///O(m+logn) = O(M+Log(N))
    searchMatrix(matrix, target) {
        let colsLength = matrix[0].length;
        let rowsLength = matrix.length;
        let topRow = 0;
        let bottomRow = rowsLength-1;
        let rowIndex;
        while(topRow<=bottomRow){
             rowIndex = topRow + Math.floor((bottomRow-topRow)/2);
            if(target > matrix[rowIndex][colsLength-1]){
                topRow = rowIndex +1;
            }else if (target < matrix[rowIndex][0]){
                bottomRow = rowIndex -1;
            }else{
                break;
            }
        }
        if(topRow > bottomRow)
            return false;

        rowIndex = topRow + Math.floor((bottomRow-topRow)/2);
        let valueArr = matrix[rowIndex];
        let left = 0;
        let right = valueArr.length-1;
        while(left<=right){
            let mid = left + Math.floor((right-left)/2);
            if(valueArr[mid]==target){
                return true;
            }else if(valueArr[mid]<target){
                left = mid+1;
            }else{
                right = mid-1;
            }

        }

        return false;
    }

}
