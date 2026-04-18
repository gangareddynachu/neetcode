class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visit = new Set();
        let q = new Queue();

        function addCell(r,c){
            if(Math.min(r,c)<0 || r===rows || c === cols 
            || visit.has(r+','+c) || grid[r][c] ==-1)
                return;
            visit.add(r+ ','+c);
            q.push([r,c]);
        }

        for(let r=0;r<rows;r++){
            for(let c=0;c<cols;c++){
                if(grid[r][c]==0){
                    q.push([r,c]);
                    visit.add(r+ ','+c);
                }
            }
        }
        let dist = 0;
        while(!q.isEmpty()){
            for(let i=q.size();i>0;i--){
                let [r,c] = q.pop();
                grid[r][c] = dist;
                addCell(r+1,c);
                addCell(r-1,c);
                addCell(r,c+1);
                addCell(r,c-1);
            }
            dist +=1;
        }
      
    }
}
