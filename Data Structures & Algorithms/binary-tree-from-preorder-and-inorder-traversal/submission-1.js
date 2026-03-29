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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    // buildTree(preorder, inorder) {
    //     if(!preorder.length || !inorder.length){
    //         return null;
    //     }

    //     let root = new TreeNode(preorder[0]);
    //     let mid = inorder.indexOf(preorder[0]);
    //     root.left = this.buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid));
    //     root.right= this.buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    //     return root;
    // }
    buildTree(preorder, inorder) {
        let pre_idx = 0;
        let indices = new Map();
        inorder.forEach((val,i) => indices.set(val,i));

        function dfs(l,r){
            if(l>r) return null;
            let root_val = preorder[pre_idx++];
            let root = new TreeNode(root_val);
            let mid = indices.get(root_val);
            root.left = dfs(l,mid-1);
            root.right = dfs(mid+1,r);
            return root;
        }
        return dfs(0,inorder.length-1)
    }
}
