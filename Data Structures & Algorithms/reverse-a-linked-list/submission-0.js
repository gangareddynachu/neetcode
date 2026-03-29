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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
      //   0->1->2 -> 3-> null
      /*
      idea is to start with head and keep assigning it backward

      */
      let prev = null;
      let current = head;
      while(current!=null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
      }

      return prev;
    }
}
