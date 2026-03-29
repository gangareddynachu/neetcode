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
        // IN order traversal
        let stack = [];
        let current = root;
        while(current || stack.length>0){
            while(current){
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            k--;
            if(k==0){
                return current.val;
            }
            current = current.right;
        }
        return null;

    }
}
