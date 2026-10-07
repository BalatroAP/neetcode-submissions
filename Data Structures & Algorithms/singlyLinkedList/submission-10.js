class LinkedNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = new LinkedNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let currNode = this.head.next;
        while (currNode) {
            if (i === index) {
                return currNode.value;
            }

            currNode = currNode.next;
            i++;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new LinkedNode(val, this.head.next);
        this.head.next = newNode;
        if (!newNode.next) {
            this.tail = newNode;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new LinkedNode(val);
        this.tail.next = newNode;
        this.tail = newNode;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i = 0;
        let currNode = this.head;

        while (i < index && currNode) {
            i++;
            currNode = currNode.next
        }

        if (currNode && currNode.next) {
            if (currNode.next === this.tail) {
                this.tail = currNode;
            }
            currNode.next = currNode.next.next
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values = [];
        let currNode = this.head.next;

        while (currNode) {
            values.push(currNode.value);
            currNode = currNode.next;
        }
        return values;
    }
}
