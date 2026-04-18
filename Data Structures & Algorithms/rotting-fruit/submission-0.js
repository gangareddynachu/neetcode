class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        /*
        Find out rotten tomate and backtrack from there..
        mark it as visited and also the subsequent ones as visited
        for each minute mark the horizontal and vertical one (rotten), here counter acts as minute
        */

        let q = [];
        let fresh = 0;
        let time = 0;

        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]==1){
                    fresh++;
                }
                if(grid[i][j]==2){
                   q.push([i,j]);
                }
            }
        }
        const directions = [[0,1],[0,-1],[-1,0],[1,0]];
        while(fresh>0 && q.length>0){
            const length = q.length;
            for(let i=0;i<length;i++){
                const [currR,currC] = q.shift();
                for(const [dr,dc] of directions){
                    const row = currR + dr;
                    const col = currC + dc;
                    if(row>=0 &&
                     row< grid.length && 
                     col>=0 && col < grid[0].length && 
                     grid[row][col]===1){
                        grid[row][col] = 2;
                        q.push([row,col]);
                        fresh--;
                     }
                }
            }
            time++;
        }
        return fresh===0 ? time : -1;


    }
}
