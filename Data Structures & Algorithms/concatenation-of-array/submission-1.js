class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let newArr = [];
        for (let i = 0 ; i < 2; i++) {
            for (let k = 0; k < nums.length; k++) {
                newArr.push(nums[k]);
            }
        }
        return newArr;
    }
}
