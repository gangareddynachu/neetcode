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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return [];

        let queue = [root];
        let result = [];
        while(queue.length>0){
            let arr = [];
            for(let i= queue.length;i>0;i--){
                let node = queue.shift();
                if(node!=null){
                    arr.push(node.val);
                    queue.push(node.left);
                    queue.push(node.right);
                }
            }
            if(arr.length>0){
                result.push(arr)
            }
        }
        return result;
    }
}
