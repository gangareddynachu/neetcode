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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let arr = [];
        let length = 0;
        let curr = head;
        while(curr){
            arr.push(curr.val)
            length++;
            curr = curr.next;
        }
        let dummyNode = new ListNode(0);
        let result = dummyNode;
        dummyNode.next = head;
        curr = head;
        let i =0;
        while(i<length){ //0<5
            let subArr = arr.slice(i,i+k);
            console.log(subArr)
            let SubArrLen = subArr.length;
            if(SubArrLen>=k){
                for(let j=subArr.length-1;j>=0;j--){
                    let newNode = new ListNode(subArr[j])
                    dummyNode.next  = newNode;
                    dummyNode = dummyNode.next;
                }
            }else{
                for(let j=0;j<=subArr.length-1;j++){
                    let newNode = new ListNode(subArr[j])
                    dummyNode.next  = newNode;
                    dummyNode = dummyNode.next;
                }
            }
            i=i+k;
        }

        return result.next;;
    }
}
