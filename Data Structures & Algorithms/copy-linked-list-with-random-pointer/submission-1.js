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
    // copyRandomList(head) {
    //     let orginalNodeToCopiedMap = new Map();
    //     orginalNodeToCopiedMap.set(null,null);

    //     let curr = head;
    //     while(curr){
    //         const copy = new Node(curr.val);
    //         orginalNodeToCopiedMap.set(curr,copy);
    //         curr = curr.next;
    //     }
    //     curr = head;
    //     while(curr){
    //         const copy = orginalNodeToCopiedMap.get(curr);
    //         copy.next = orginalNodeToCopiedMap.get(curr.next);
    //         copy.random = orginalNodeToCopiedMap.get(curr.random);
    //         curr = curr.next;
    //     }
    //     return orginalNodeToCopiedMap.get(head)

    // }
    copyRandomList(head) {
        if (!head) {
            return null;
        }

        let curr = head;
        // create a nodes with values right next to original nodes
        while (curr) {
            const l2 = new Node(curr.val);
            l2.next = curr.next;
            curr.next = l2;
            curr = l2.next;
        }

        const newHead = head.next;
        curr = head;
        while(curr){
            if(curr.random){
                // set the next to current's random value with
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }
        curr = head;
        //Delinking part
        while(curr){
            const l2 = curr.next;
            // link current to one next to l2, so it links back to original list
            curr.next = l2.next;
            if(l2.next){
                l2.next = l2.next.next;
            }
            curr = curr.next

        }
        return newHead;


    }
}
