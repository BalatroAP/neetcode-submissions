class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let left = 1;
        let right = 1;

        for (let i = 0; i < n - 1; i++) {
            let temp = left;
            left = left + right;
            right = temp;
        }

        return left
    }
}
