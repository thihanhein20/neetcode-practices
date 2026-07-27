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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {

        let set = new Set<ListNode>();

        

        while(head !==null)
        {
            if(set.has(head)) return true;
            set.add(head);
            head = head.next;
        }
        return false;

    }
}
