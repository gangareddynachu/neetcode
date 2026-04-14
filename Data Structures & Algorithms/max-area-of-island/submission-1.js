class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland1(grid) {
        const directions = [[1,0],[-1,0],[0,1],[0,-1]];
        const rows = grid.length;
        const cols = grid[0].length;

        let area=0;

        const dfs = (r,c) =>{
            if(r<0 || c<0 || r>=rows || c>=cols || grid[r][c] === 0)
                return 0;
            grid[r][c] = 0;
            let res = 1;
            for(const [dr,dc] of directions){
                res +=dfs(r+dr,c+dc);
            }
            return res;

        }
        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(grid[r][c] === 1){
                    area = Math.max(area,dfs(r,c));
                }
            }
        }
        return area;
    }

     maxAreaOfIsland(grid){
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const ROWS = grid.length,
            COLS = grid[0].length;
        let area = 0;

        const bfs = (r, c) => {
            const q = new Queue();
            q.push([r, c]);
            grid[r][c] = 0;
            let res = 1;

            while (!q.isEmpty()) {
                const [row, col] = q.pop();
                for (const [dr, dc] of directions) {
                    const nr = row + dr,
                        nc = col + dc;
                    if (
                        nr >= 0 &&
                        nc >= 0 &&
                        nr < ROWS &&
                        nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        q.push([nr, nc]);
                        grid[nr][nc] = 0;
                        res++;
                    }
                }
            }
            return res;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    area = Math.max(area, bfs(r, c));
                }
            }
        }

        return area;
     }
}
