class StackNode {
    constructor(val = null, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
class MyStack {
    constructor() {
        this.base = new StackNode();
        this.size = 0;
        this.curr = this.base;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let newNode = new StackNode(x, this.curr);
        this.curr = this.curr.next = newNode;
        this.size++;
    }

    /**
     * @return {number}
     */
    pop() {
        let topValue = this.curr.val;
        this.curr = this.curr.prev;
        this.size--;
        return topValue;
    }

    /**
     * @return {number}
     */
    top() {
        return this.curr.val;
    }

    /**
     * @return {boolean}
k     */
    empty() {
        return this.size === 0; 
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
