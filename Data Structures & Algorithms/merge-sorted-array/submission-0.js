class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let tempNums1 = nums1.slice(0, m);

        let i = 0;
        let j = 0;
        let k = 0;

        while (i < tempNums1.length && j < n) {
            console.log(nums1);
            if (tempNums1[i] < nums2[j]) {
                nums1[k] = tempNums1[i];
                i++;
            } else {
                nums1[k] = nums2[j];
                j++;
            }
            k++;
        }

        while (i < tempNums1.length) {
            nums1[k] = tempNums1[i];
            i++;
            k++;
        }

        while (j < nums2.length) {
            nums1[k] = nums2[j];
            j++;
            k++;
        }
    }
}
