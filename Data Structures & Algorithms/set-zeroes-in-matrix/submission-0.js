class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
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
