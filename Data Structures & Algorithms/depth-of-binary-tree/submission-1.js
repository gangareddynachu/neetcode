/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    //DFS
    maxDepth1(root) {
        if(root ==null) return 0
        return 1+ Math.max(this.maxDepth(root.left), this.maxDepth(root.right))
    }
    //BFS
    maxDepth(root) {
        if(root ==null) return 0
        let queue = [[root,1]];
        let res = 0;
        //[1,1]
        while(queue.length>0){
            const current = queue.pop(); // [1,1], //[3,2]
            const node = current[0];
            const depth = current[1];
            if(node!=null){
                res = Math.max(res,depth); // 1 // 2
                queue.push([node.left,depth+1]); //[ [2,2],[3,2]] // [2,2]
                queue.push([node.right,depth+1]);
            }
        }
        return res;

    }
}
