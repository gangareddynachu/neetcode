/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    // cloneGraph(node) {
    //     const map = new Map();
    //     return this.dfs(node,map)
    // }
    // dfs(node,map){
    //     if(node==null){
    //         return null;
    //     }
    //     if(map.has(node)){
    //         return map.get(node);
    //     }

    //     const copy = new Node(node.val);
    //     map.set(node,copy);

    //     for(const nei of node.neighbors){
    //         copy.neighbors.push(this.dfs(nei,map));
    //     }
    //     return copy;
    // }
    cloneGraph(node) {
        if(!node) return null;
        const map = new Map();
        const q = new Queue();

        map.set(node,new Node(node.val));
        q.push(node);

        while(!q.isEmpty()){
            const curr = q.pop();
            for(const nei of curr.neighbors){
                if(!map.has(nei)){
                    map.set(nei,new Node(nei.val));
                    q.push(nei);
                }
                map.get(curr).neighbors.push(map.get(nei));
            }
        }
        return map.get(node)
    }
}
