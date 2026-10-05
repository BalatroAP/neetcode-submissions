class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let greatestEle = 0;
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k] > greatestEle) {
                    greatestEle = arr[k];
                }
            }
            arr[i] = greatestEle;
            greatestEle = 0;
        }

        arr[arr.length - 1] = -1;
        
        return arr;
    }
}
