//Used pieces of both possibilities I had, should iterate over all permutations
function permutationSort(a) {
    function isSorted(arr) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }

    function generatePermutations(arr, currentIdx) {
        if (currentIdx === arr.length) {
            if (isSorted(arr)) {
                return true;
            }
            return false;
        }

        for (let i = currentIdx; i < arr.length; i++) {
            [arr[i], arr[currentIdx]] = [arr[currentIdx], arr[i]]; 
            if (generatePermutations(arr, currentIdx + 1)) {
                return true;
            }
            [arr[i], arr[currentIdx]] = [arr[currentIdx], arr[i]]; 
        }
        return false;
    }

    generatePermutations(a, 0);

    return a;
}



