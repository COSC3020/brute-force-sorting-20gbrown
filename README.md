[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12441342&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Answer

The runtime complexity of 'permutationSort' is factorial or $O(N!)$, where $N$ is the length of the input array 'a'. The base case for the recursion is when 'currentIdx' equals the length of the input array 'arr'. The 'generatePermutations' function explores all possible permutations by swapping elements at the current index with each remaining element. For each 'currentIdx' there are $(N - currentIdx)$ possible choices for the next element swap, so each level of recursion has this time. The total number of recursive calls is the product of the branching factors at each level, this makes the time, $(N -0) * (N - 1) * (N - 2)$, which is $N!$. At each level of recursion the algorithm swaps elements and makes a call to 'generatePermutation', and each of these operations takes constant time. So the worst case is $O(N!)$, as each permutation needs to be generated and checked. The time complexity of checking whether a given permutation is sorted is $O(N)$ beacuse, in the worst case, the algorithm needs to iterate through all $N$ elements of the array. 

The best case input for this algorithm would be an already sorted array where the check for sortedness would take $O(N)$ time. This means there would only need to be a single check with a time of $O(1)$. The worst case input would be an array that has all possible permutations of its elements, which would result in a time of $O(N! * N)$. If the permutations were generated randomly without memory, the complexity would still be the same, $O(N! * N)$. This is because the number of permutations to check remains the same. 
