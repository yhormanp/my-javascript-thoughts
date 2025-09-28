// 274. H-Index

// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

// According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

// Example 1:

// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
// Example 2:

// Input: citations = [1,3,1]
// Output: 1

// Constraints:

// n == citations.length
// 1 <= n <= 5000
// 0 <= citations[i] <= 1000

/**
 * @param {number[]} citations
 * @return {number}
 */

let citations = [1, 3, 1];

var hIndex = function (citations) {
  let hIndex = 0;
    citations.sort((a, b) => {
        return b - a;
    });

    // If the current citation is greater than or equal to the number of papers considered so far (i + 1),
    // then we can potentially increase our h-index.
    // The h-index is the minimum of the current citation and the number of papers.

    for (let index = 0; index < citations.length; index++) {
        if (citations[index] >= index + 1) {
            hIndex = index + 1;
        }

    }
    return hIndex
};

// scenario 1
console.log('response scenario 1 ', hIndex(citations));


// scenario 2
citations=[3,0,6,1,5];
console.log('response scenario 2 ', hIndex(citations));



