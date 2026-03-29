// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let orginalNodeToCopiedMap = new Map();
        orginalNodeToCopiedMap.set(null,null);

        let curr = head;
        while(curr){
            const copy = new Node(curr.val);
            orginalNodeToCopiedMap.set(curr,copy);
            curr = curr.next;
        }
        curr = head;
        while(curr){
            const copy = orginalNodeToCopiedMap.get(curr);
            copy.next = orginalNodeToCopiedMap.get(curr.next);
            copy.random = orginalNodeToCopiedMap.get(curr.random);
            curr = curr.next;
        }
        return orginalNodeToCopiedMap.get(head)

    }
}
