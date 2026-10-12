class LinkedNode {
    constructor(val = -1, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.head = new LinkedNode();
        this.tail = new LinkedNode();
        this.head.next = this.tail;
        this.tail.prev= this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if (index < 0 || index > this.size) {
            return this.head.prev;
        }

        let curr = this.head;

        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }

        return curr
    }

    /*
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index > this.size) {
            return -1;
        }

        let curr = this.head.next;

        while (curr && index > 0) {
            curr = curr.next;
            index--;
        }

        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size + 1 || index < 0) {
            return;
        }

        let curr = this.head.next;

        while (curr && index) {
            curr = curr.next;
            index--;
        }
        console.log(`curr: ${curr.val}`)

        let newNode = new LinkedNode(val, curr.prev, curr);
        curr.prev.next = newNode;
        curr.prev = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index > this.size - 1 || index < 0) {
            return;
        }

        let curr = this.head.next;

        while (index) {
            curr = curr.next;
            index--;
        }

        let next = curr.next;
        let prev = curr.prev;

        prev.next = next;
        next.prev = prev;
        this.size--;
    }
}