function permutationSort(a) {
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function permute(arr, startIndex, count) {
        if (startIndex === arr.length - 1) {
            if (isSorted(arr)) {
                return count + 1;
            }
            return count;
        }

        let minCount = count; //track the minimum count among all permutations
        for (let i = startIndex; i < arr.length; i++) {
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
            minCount = Math.min(minCount, permute(arr,startIndex + 1, count +1));
            [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]]; // Backtrack
        }

        return minCount;
    }

    return permute(a, 0, 0);
}
