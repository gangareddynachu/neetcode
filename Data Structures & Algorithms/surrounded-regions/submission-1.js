class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows = board.length;
        let cols = board[0].length;
        /*Three step approach.. using reverse thinking
        1) DFS capture unsurrounded regions.. for any of the border O's make it T, so that border becomes surrounded (O -> T)
        2)Now, capture surrounded regions (O-> X)
        3)Uncapture unsurrounded regions ( T-> O)
        */
        

        const capture = (r,c) =>{
            if(r<0 ||
            c<0 ||
            r == rows ||
            c == cols ||
            board[r][c] !=='O'){
                return;
            }
            board[r][c] = 'T';
            capture(r+1,c);
            capture(r-1,c);
            capture(r, c + 1);
            capture(r, c - 1);
        }
        for(let r=0;r<rows;r++){
            if(board[r][0]==='O') capture(r,0);
            if(board[r][cols-1]==='O') capture(r,cols-1);
        }
        for(let c=0;c<cols;c++){
            if(board[0][c]=='O') capture(0,c);
            if(board[rows-1][c]==='O') capture(rows-1,c);
        }

        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(board[r][c]=='O') board[r][c]='X';
                else if(board[r][c]==='T') board[r][c]='O';

            }
        }
    }
}
