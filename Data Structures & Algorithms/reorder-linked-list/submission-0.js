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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while(fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        //split the first list
        slow.next = null;
        //we got the middle, lets reverse second half
        let prev = null
        while(second){
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        //After reversing, add one from first half and reversed second half
        let first = head;
        second = prev;

        while(second!==null){
            const t1 = first.next;
            const t2 = second.next;
            first.next = second;
            second.next = t1;
            first = t1;
            second = t2;
        }

    }
}
