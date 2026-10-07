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
        if (!head) {
            return head;
        }
        let nums = []
        let linkedList = head;
        while (linkedList) {
            nums.push(linkedList.val);
            linkedList = linkedList.next;
        }

        let reverseHeadLink = new ListNode(nums[nums.length - 1]);
        let currLink = reverseHeadLink;
        for (let i = nums.length - 2; i >= 0; i--) {
            let newNode = new ListNode(nums[i]);
            currLink.next = newNode;
            currLink = currLink.next;
        }
        return reverseHeadLink;
    }
}
