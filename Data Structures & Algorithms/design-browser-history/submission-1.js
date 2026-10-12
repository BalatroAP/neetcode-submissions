class BrowserNode {
    constructor(url, prevUrl = null, nextUrl = null) {
        this.url = url;
        this.prevUrl = prevUrl;
        this.nextUrl = nextUrl;
    }
}
class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.head = new BrowserNode(homepage);
        this.curr = this.head;
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        let newBrowserNode = new BrowserNode(url, this.curr);
        this.curr.next = newBrowserNode;
        this.curr = newBrowserNode;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (this.curr !== this.head && steps > 0) {
            let temp = this.curr;
            this.curr = this.curr.prevUrl;
            this.curr.nextUrl = temp;
            steps--;
        }

        return this.curr.url
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (this.curr && steps > 0) {
            this.curr = this.curr.nextUrl ? this.curr.nextUrl : this.curr;
            steps--;
        }

        return this.curr.url
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
