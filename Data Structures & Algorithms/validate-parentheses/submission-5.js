class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 === 1) {
            return false;
        }

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
        if (stack.length > 0) {
            return false;
        }

        return true;
    }
    
}
