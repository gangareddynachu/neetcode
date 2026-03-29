class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    /*O(n2) approach
    isValidSudoku(board) {

        for(let row = 0;row<9;row++){
            let seen = new Set();
            for(let i=0;i<9;i++){
                if(board[row][i] === ".") continue;
                if(seen.has(board[row][i])) return false;
                seen.add(board[row][i]);
            }
        }
        for(let col = 0;col<9;col++){
            let seen = new Set();
            for(let i=0;i<9;i++){
                if(board[i][col] === ".") continue;
                if(seen.has(board[i][col])) return false;
                seen.add(board[i][col]);
            }
        }
        for (let square = 0; square < 9; square++) {
            let seen = new Set();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let row = Math.floor(square / 3) * 3 + i;
                    let col = (square % 3) * 3 + j;
                    if (board[row][col] === '.') continue;
                    if (seen.has(board[row][col])) return false;
                    seen.add(board[row][col]);
                }
            }
        }
        return true
    }
    */

    isValidSudoku(board){
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for(let r =0;r<9;r++){
            for(let c=0;c<9;c++){
                if(board[r][c] === ".") continue;
                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)})}`;

                if((rows.get(r) && rows.get(r).has(board[r][c])) || 
                (cols.get(c) && cols.get(c).has(board[r][c])) ||
                (squares.get(squareKey) && squares.get(squareKey).has(board[r][c]))){
                    return false;
                }

                if(!rows.has(r))
                    rows.set(r,new Set());
                if(!cols.has(c))
                    cols.set(c,new Set());
                if(!squares.has(squareKey))
                    squares.set(squareKey, new Set());
                
                rows.get(r).add(board[r][c])
                cols.get(c).add(board[r][c]);
                squares.get(squareKey).add(board[r][c]);
            }
        }
        return true
    }





}
