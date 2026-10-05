class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let newLength = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                delete nums[i]
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === undefined) {
                for (let rightPtr = i + 1; rightPtr < nums.length; rightPtr++) {
                    if (typeof nums[rightPtr] === "number") {
                        nums[i] = nums[rightPtr];
                        delete nums[rightPtr]
                        break;
                    }
                }
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (typeof nums[i] === "number") {
                newLength++;
            }
        }
        return newLength;
    }
}
