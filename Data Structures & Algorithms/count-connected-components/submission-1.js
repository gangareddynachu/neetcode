class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponentsDFS(n, edges) {
        //sort by second vertex in the edge and see if they are in order
        // if order breaks, then increment count as we see connection break
        const adj = Array.from({length:n},()=>[]);
        const visit = Array(n).fill(false);
        
        for(const [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }
        const dfs = (node)=>{
            for(const nei of adj[node]){
                if(!visit[nei]){
                    visit[nei] = true;
                    dfs(nei)
                }
            }
        }
        let res = 0;
        for(let node = 0; node< n;node++){
            if(!visit[node]){
                visit[node] = true;
                dfs(node);
                res++;
            }
        }
        return res;
    }
    countComponentsBFS(n, edges) {
        const adj = Array.from({length:n},()=>[]);
        const visit = Array(n).fill(false);
        
        for(const [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        }

        const bfs= (node)=>{
            const q = new Queue([node]);
            visit[node] = true;
            while(!q.isEmpty()){
                const cur = q.pop();
                for(const nei of adj[cur]){
                    if(!visit[nei]){
                        visit[nei] = true;
                        q.push(nei);
                    }
                }
            }
        }

        let res = 0;
        for(let node = 0; node<n;node++){
            if(!visit[node]){
                bfs(node);
                res++;
            }
        }
        return res;
    }


    countComponents(n, edges) {
        const dsu = new DSU(n);
        let res = n;
        for(const [u,v] of edges){
            if(dsu.union(u,v)){
                res--;
            }
        }
        return res;
    }
}
class DSU{
    constructor(n){
        this.parent = Array.from({length:n},(_,i)=>i);
        this.rank = Array(n).fill(1);
    }
    find(node){
        let cur = node;
        while(cur!==this.parent[cur]){
            this.parent[cur] = this.parent[this.parent[cur]];
            cur = this.parent[cur];
        }
        return cur;
    }
    union(u,v){
        let pu = this.find(u);
        let pv = this.find(v);
        if(pu==pv){
            return false;
        }
        if(this.rank[pv]>this.rank[pu]){
            [pu,pv] = [pv,pu];
        }
        this.parent[pv] = pu;
        this.rank[pu] += this.rank[pv];
        return true;
    }
}