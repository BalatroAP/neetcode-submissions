class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = new Array(nums.length * 2);

        for (let i = 0, k = nums.length; i < nums.length; i++, k++) {
            newArr[i] = newArr[k] = nums[i];
        }

        return newArr;
    }
}
