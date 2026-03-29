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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let result = [];
        let q = [root];
        while (q.length > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            let node = q.shift();
            if (i === size - 1) {
                result.push(node.val);
            }
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
        return result
    }
}
