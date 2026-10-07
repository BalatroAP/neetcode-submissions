class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            "}": "{",
            "]": "[",
            ")": "("
        };

        for (const bracket of s) {
            if (Object.keys(map).includes(bracket)) {
                let leftSide = stack.pop();
                if (map[bracket] === leftSide) {
                    continue;
                }
                return false;
            } else {
                stack.push(bracket);
            }
        }
        return stack.length === 0;
    }
}
