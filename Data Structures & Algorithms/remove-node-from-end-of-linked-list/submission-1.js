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
     * @param {number} n
     * @return {ListNode}
    
    removeNthFromEnd(head, n) {
        let temp = head;
        let length = 0;
        while(temp){
            temp = temp.next;
            length++;
        }
        // Calculate the position to remove from the front
        let target = length - n + 1;
        // If target is 1, remove the head node
        if (target === 1) {
            return head.next;
        }
        // Traverse to the node just before the target node
        let curr = head;
        for (let i = 1; i < target - 1; i++) {
            curr = curr.next;
        }
        // Remove the target node
        curr.next = curr.next.next;
        return head;

    }
     */
    removeNthFromEnd(head, n) {
        //two pointer approach
        const dummy = new ListNode(0, head);
        let slow = dummy
        let fast = head;
        while (n > 0) {
            fast = fast.next;
            n--;
        }
        while(fast!=null){
            slow = slow.next;
            fast = fast.next;
        }
        // slow will be n places behind fast, as we advanced fast by n steps prior
        slow.next = slow.next.next;
        return dummy.next;
    }
}
