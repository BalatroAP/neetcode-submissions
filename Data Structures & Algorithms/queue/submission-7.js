class QueueNode {
    constructor(val = null, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyDeque {
    constructor() {
        this.head = new QueueNode();
        this.tail = new QueueNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size > 0 ? false : true;
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new QueueNode(value, this.tail.prev, this.tail);
        this.tail.prev = this.tail.prev.next = newNode;
        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new QueueNode(value, this.head, this.head.next);
        this.head.next = this.head.next.prev = newNode;
        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) {
            return -1;
        }

        let value = this.tail.prev.val;
        let newEndOfLine = this.tail.prev.prev;
        newEndOfLine.next = this.tail;
        this.tail.prev = newEndOfLine;
        this.size--;
        return value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) {
            return -1;
        }

        let value = this.head.next.val;
        let newStartOfLine = this.head.next.next;
        newStartOfLine.prev = this.head;
        this.head.next = newStartOfLine;
        this.size--;
        return value;
    }
}
