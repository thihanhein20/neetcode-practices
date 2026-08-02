// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if (head === null) {
            return null;
        }

        const oldToCopy = new Map<Node, Node>();

        let curr: Node | null = head;

        // First pass: create copies
        while (curr !== null) {
            const copy = new Node(curr.val);
            oldToCopy.set(curr, copy);
            curr = curr.next;
        }

        curr = head;

        // Second pass: connect next and random pointers
        while (curr !== null) {
            const copy = oldToCopy.get(curr)!;

            copy.next = curr.next !== null ? oldToCopy.get(curr.next)! : null;

            copy.random = curr.random !== null ? oldToCopy.get(curr.random)! : null;

            curr = curr.next;
        }

        return oldToCopy.get(head)!;
    }
}
