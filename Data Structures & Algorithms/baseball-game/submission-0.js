class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const tracker = [];

        for (const op of operations) {
            switch (op) {
                case "+":
                    let addition = Number(tracker[tracker.length - 1]) + Number(tracker[tracker.length - 2]);
                    tracker.push(addition);
                    break;
                case "C":
                    tracker.pop();
                    break;
                case "D":
                    tracker.push(Number(tracker[tracker.length - 1] * 2));
                    break;
                default:
                    tracker.push(Number(op));
                    break;      
            }
        }

        return tracker.reduce((acc, num) => {
            return acc + num;
        }, 0)
    }
}
