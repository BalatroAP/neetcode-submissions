class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1
        for (let i = arr.length - 1; i >= 0; i--) {
            let temp = arr[i];
            arr[i] = rightMax;

            if (temp > rightMax) {
                rightMax = temp;
            }
        }

        return arr;
    }
}
