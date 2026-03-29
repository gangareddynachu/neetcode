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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
    let curr1 = l1;
    let curr2 = l2;
    let dummyNode = new ListNode(0);
    let result = dummyNode;
    while(curr1 || curr2){
        let a = curr1 ? curr1.val : 0;
        let b = curr2 ? curr2.val : 0;
        let sum = a+ b + carry;
        console.log(sum)
        if(sum>=10){
            carry = Math.floor(sum/10);
            sum = sum%10;
        }else{
            carry = 0;
        }
        let newNode = new ListNode(sum);
        dummyNode.next = newNode;
        dummyNode = newNode;
        if(curr1)
            curr1 = curr1.next;
        if(curr2)
            curr2 = curr2.next;
    }
    if(carry !=0){
        let newNode = new ListNode(carry);
        dummyNode.next = newNode;
    }
    return result.next;

    }
}
