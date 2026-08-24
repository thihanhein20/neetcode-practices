class ListNode{
    key : number;
    value : number;
    prev : ListNode | null = null;
    next : ListNode | null = null;

    constructor(key: number, value : number)
    {
        this.key = key;
        this.value = value;
    }
}


class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity : number;
    cache : Map<number, ListNode>;
    head : ListNode;
    tail : ListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new ListNode(0, 0);
        this.tail = new ListNode(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addNodeToHead(node: ListNode) : void
    {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    removeNode(node : ListNode) : void{
        const prev = node.prev!;
        const next = node.next!;
        prev.next = next;
        next.prev = prev;
    }

    moveToHead(node : ListNode) : void{
        this.removeNode(node);
        this.addNodeToHead(node);
    }

     removeTail(): ListNode {
        const node = this.tail.prev!;

        this.removeNode(node);

        return node;
    }





    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {


        const node = this.cache.get(key);

        if(node === undefined)
        {
            return -1;
        }

        this.moveToHead(node);

        return node.value;

    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
   const existingNode = this.cache.get(key);

        // Key already exists
        if (existingNode !== undefined) {
            existingNode.value = value;

            this.moveToHead(existingNode);

            return;
        }

        // New node
        const newNode = new ListNode(key, value);

        this.cache.set(key, newNode);
        this.addNodeToHead(newNode);

        // Over capacity → remove least recently used
        if (this.cache.size > this.capacity) {
            const removedNode = this.removeTail();

            this.cache.delete(removedNode.key);
        }




    }
}
