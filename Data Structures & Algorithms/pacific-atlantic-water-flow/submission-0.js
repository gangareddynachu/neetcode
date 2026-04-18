class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let pacificBorders = Array.from({length:ROWS},()=> Array(COLS).fill(false));
        let atlanticBorders = Array.from({length:ROWS},()=> Array(COLS).fill(false));

        const dfs = (r,c,ocean) =>{
            ocean[r][c] = true;
            let directions = [
                [1,0],[-1,0],[0,1],[0,-1]
            ]
            for(let [dr,dc] of directions){
                let nr = r+dr,nc = c+dc;
                if(nr>=0 &&
                nr<ROWS &&
                nc>=0 &&
                nc <COLS &&
                !ocean[nr][nc] &&
                heights[nr][nc] >= heights[r][c]){
                    dfs(nr,nc,ocean);
                }
            }
        }
        for(let c=0;c<COLS;c++){
            dfs(0,c,pacificBorders);
            dfs(ROWS-1,c,atlanticBorders)
        }
        for(let r=0;r<ROWS;r++){
            dfs(r,0,pacificBorders);
            dfs(r,COLS-1,atlanticBorders)
        }
        let res=[];
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if(pacificBorders[r][c] && atlanticBorders[r][c] ){
                    res.push([r,c]);
                }
            }
        }
        return res;
    }
}
