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
    */
    searchMatrix(matrix, target) {
        let colsLength = matrix[0].length;
        let rowsLength = matrix.length;
        let valueExistsinRowIndex = -1;
        for(let i=0;i<rowsLength;i++){
            let row1 = matrix[i];
            if(row1[row1.length-1] == target){
                return true
            }else if(row1[row1.length-1] > target){
                valueExistsinRowIndex = i
                break;
            }
        }
        console.log(valueExistsinRowIndex)
        if(valueExistsinRowIndex>-1){
            let valueArr = matrix[valueExistsinRowIndex];
            for(let k=0;k<valueArr.length;k++){
                if(valueArr[k]==target)
                    return true
            }
        }
        return false;
    }

}
