/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        return this.sort(pairs, 0, pairs.length - 1);
    }

    sort(pairs, startIdx, endIdx) {
        if (endIdx - startIdx + 1 <= 1) {
            return pairs;
        }

        let middleIdx = Math.floor((startIdx + endIdx) / 2);

        this.sort(pairs, startIdx, middleIdx);
        this.sort(pairs, middleIdx + 1, endIdx);
        this.merge(pairs, startIdx, middleIdx, endIdx);

        return pairs
    }

    merge(pairs, startIdx, middleIdx, endIdx) {
        let leftArr = pairs.slice(startIdx, middleIdx + 1);
        let rightArr = pairs.slice(middleIdx + 1, endIdx + 1);

        let i = 0;
        let j = 0;
        let k = startIdx;

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i].key <= rightArr[j].key) {
                pairs[k] = leftArr[i];
                i++;
            } else {
                pairs[k] = rightArr[j];
                j++;
            }
            k++;
        }

        while (i < leftArr.length) {
            pairs[k] = leftArr[i];
            i++;
            k++;
        }

        while (j < rightArr.length) {
            pairs[k] = rightArr[j];
            j++;
            k++;
        }
    }
}
