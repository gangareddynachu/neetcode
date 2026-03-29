class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
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
}
