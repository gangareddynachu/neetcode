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
    diameterOfBinaryTree(root) {
        let res = [0];
        this.height(root,res)
        return res[0]
    }
    height(root,res){
        if(root === null) return 0;
        let left = this.height(root.left,res);
        let right = this.height(root.right,res);
        res[0] = Math.max(res[0],left + right);
        return 1 + Math.max(left,right)
    }

}
