class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish1(numCourses, prerequisites) {
        let preMap = new Map();
        for(let i=0;i<numCourses;i++){
            preMap.set(i,[]);
        }
        for(let [crs,pre] of prerequisites){
            preMap.get(crs).push(pre);
        }

        const visiting = new Set();
        const dfs= (crs) =>{
            if(visiting.has(crs)){
                return false;
            }
            if(preMap.get(crs).length==0){
                return true;
            }
            visiting.add(crs);
            for(let pre of preMap.get(crs)){
                if(!dfs(pre)){
                    return false;
                }
            }
            visiting.delete(crs);
            preMap.set(crs,[]);
            return true;
        }

        for(let c=0;c<numCourses;c++){
            if(!dfs(c)){
                return false;
            }
        }
        return true;
    }
    canFinish(numCourses, prerequisites) {
        let inDegree = Array(numCourses).fill(0);
        let adj = Array.from({length:numCourses},()=>[]);
        for(let [src,dst] of prerequisites){
            inDegree[dst]++;
            adj[src].push(dst);
        }
        let q = new Queue();
        for (let i = 0; i < numCourses; i++) {
            if(inDegree[i] ==0){
                q.push(i)
            }
        }
        let finish = 0;
        while(!q.isEmpty()){
            let node = q.pop();
            finish++;
            for(let nei of adj[node]){
                inDegree[nei]--;
                if(inDegree[nei]==0){
                    q.push(nei);
                }
            }
        }
        return finish === numCourses;
    }
}
