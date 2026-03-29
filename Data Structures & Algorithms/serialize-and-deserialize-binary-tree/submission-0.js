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

class Codec {
    constructor(){
        this.NULL_TOKEN = "$";
    }
    parseToken(token) {
        const value = Number(token);
        return Number.isNaN(value) ? token : value;
    }

    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";
        const queue = [root];
        const tokens = [];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node) {
                tokens.push(String(node.val));
                queue.push(node.left);
                queue.push(node.right);
            } else {
                tokens.push(this.NULL_TOKEN);
            }
        }
        while (tokens.length > 0 && tokens[tokens.length - 1] === this.NULL_TOKEN) {
            tokens.pop();
        }
        return tokens.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        const tokens = data.split(",");
        const root = new TreeNode(this.parseToken(tokens[0]));
        const queue = [root];
        let cursor = 1;

        while (queue.length > 0 && cursor < tokens.length) {
            const node = queue.shift();
            if (!node) continue;

            const leftToken = tokens[cursor++];
            if (leftToken !== undefined && leftToken !== this.NULL_TOKEN) {
                node.left = new TreeNode(this.parseToken(leftToken));
                queue.push(node.left);
            }

            const rightToken = tokens[cursor++];
            if (rightToken !== undefined && rightToken !== this.NULL_TOKEN) {
                node.right = new TreeNode(this.parseToken(rightToken));
                queue.push(node.right);
            }
        }
        return root;
    }
}
