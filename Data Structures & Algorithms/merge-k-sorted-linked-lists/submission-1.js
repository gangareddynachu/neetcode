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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let tempArr = [];
        for(let i=0;i<lists.length;i++){
            let curr = lists[i];
            while(curr){
                tempArr.push(curr.val)
                curr = curr.next;
            }
        }
        let dummyNode = new ListNode(0);
        let temp = dummyNode;
        tempArr.sort((a, b) => a - b);
        for (let i = 0; i < tempArr.length; i++) {
            let node = new ListNode(tempArr[i]);
            temp.next = node;
            temp = temp.next;
        }
        return dummyNode.next;
        
    }
}
