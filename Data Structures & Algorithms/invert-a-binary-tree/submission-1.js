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
     * @return {TreeNode}
     */

    //DFS
    invertTree1(root) {
        if(root == null){
            return root;
        }
        this.invertTree(root.left)
        this.invertTree(root.right)
        const curr = root.left;
        root.left = root.right;
        root.right = curr;
        return root;

    }
    //DFS
    invertTree(root) {
   var queuearr = [];
   if(root!==null){
       queuearr.push(root)
   }

   while(queuearr.length>0){
       let temp = queuearr.shift();
       if(temp.left!=null){
           queuearr.push(temp.left)
       }
       if(temp.right!=null){
           queuearr.push(temp.right)
       }

       let curr = temp.left;
       temp.left = temp.right;
       temp.right = curr;
   }

   return root;

    }

}
