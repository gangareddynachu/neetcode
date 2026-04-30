class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */

    findRedundantConnection(edges) {
        const dsu = new DSU(edges.length+1);
        for (const [n1, n2] of edges) {
            if (!dsu.union(n1, n2)) {
                return [n1, n2];
            }
        }
        return [];

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
