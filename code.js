/*function permutationSort(a) {
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
}*/

//Not sure if this is technically a brute force sort, I can't get the above one to work 
function permutationSort(a) {
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function selectionSort(arr) {
        let count = 0;

        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex !== i) {
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                count++;
            }
        }

        return count;
    }

    return selectionSort(a);
}

