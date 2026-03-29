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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) return null;
 
    const queue = [root];
    const values = [];
 
    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.val);
 
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
 
    values.sort((a, b) => a - b);
    return values[k - 1];

    }
}
