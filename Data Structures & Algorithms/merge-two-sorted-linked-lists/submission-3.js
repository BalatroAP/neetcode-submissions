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
        let start, curr;

        while (list1 && list2) {
            if (!curr) {
                if (list1.val < list2.val) {
                    start = curr = list1;
                    list1 = list1.next;
                } else {
                    start =curr = list2;
                    list2 = list2.next;
                }
                continue;
            }

            if (list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
                curr = curr.next;
            } else {
                curr.next = list2;
                list2 = list2.next
                curr = curr.next;
            }
        }


        if (list2) {
            if (!start) {
                start = list2;
            } else {
                curr.next = list2;
                curr = curr.next;
            }
        }
        
        if (list1) {
            if (!start) {
                start = list1;
            } else {
                curr.next = list1; 
                curr = curr.next;
            }
        }

        return start ? start : list1
    }
}
