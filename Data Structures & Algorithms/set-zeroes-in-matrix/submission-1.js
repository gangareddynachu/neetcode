class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix){
        const ROWS = matrix.length;
        const COLS = matrix[0].length;
        let rowZero = false;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (matrix[r][c] == 0) {
                    matrix[0][c] = 0;
                    if (r > 0) {
                        matrix[r][0] = 0;
                    } else {
                        rowZero = true;
                    }
                }
            }
        }

        for (let r = 1; r < ROWS; r++) {
            for (let c = 1; c < COLS; c++) {
                if (matrix[0][c] == 0 || matrix[r][0] == 0) {
                    matrix[r][c] = 0;
                }
            }
        }

        if (matrix[0][0] == 0) {
            for (let r = 0; r < ROWS; r++) {
                matrix[r][0] = 0;
            }
        }

        if (rowZero) {
            for (let c = 0; c < COLS; c++) {
                matrix[0][c] = 0;
            }
        }


    }
    setZeroes1(matrix) {
        let r = matrix.length;
        let c = matrix[0].length;
        let zeroRows = new Set();
        let zeroCols = new Set();

        for(let i=0;i<r;i++){
            for(let j=0;j<c;j++){
                if(matrix[i][j] == 0){
                    zeroRows.add(i);
                    zeroCols.add(j);
                }
            }
        }
        for(let i=0;i<r;i++){
            for(let j=0;j<c;j++){
                if(zeroRows.has(i) || zeroCols.has(j) ){
                   matrix[i][j] = 0;
                }
            }
        }
    }
        

}
