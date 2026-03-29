/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let startNode = new ListNode(0);
        let current = startNode;
        let c1 = list1;
        let c2 = list2
        while(c1!=null && c2!==null){
            // we compare until both sizes are equal
            if(c1.val <c2.val){
                current.next = c1;
                current = current.next
                c1 = c1.next;
            }else{
                current.next = c2;
                current = current.next
                c2 = c2.next;
            }
        }
        //if we are out of c1 elements, then add rest of c2
        if(c1==null && c2!=null){
            while(c2!=null){
                current.next = c2;
                current = current.next
                c2 = c2.next;
            }
        }
        if(c2==null && c1!=null){
            while(c1!=null){
                current.next = c1;
                current = current.next;
                c1 = c1.next;
            }
        }
        return startNode.next;
    }
}
