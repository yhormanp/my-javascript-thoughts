// // ou are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// // Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// // The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// // Example 1:

// // Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// // Output: [1,2,2,3,5,6]
// // Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// // The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// // Example 2:

// // Input: nums1 = [1], m = 1, nums2 = [], n = 0
// // Output: [1]
// // Explanation: The arrays we are merging are [1] and [].
// // The result of the merge is [1].
// // Example 3:

// // Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// // Output: [1]
// // Explanation: The arrays we are merging are [] and [1].
// // The result of the merge is [1].
// // Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// // Constraints:

// // nums1.length == m + n
// // nums2.length == n
// // 0 <= m, n <= 200
// // 1 <= m + n <= 200
// // -109 <= nums1[i], nums2[j] <= 109

// // Follow up: Can you come up with an algorithm that runs in O(m + n) time?

//*****************SOLUTION  */
let arrayNums1 = [];
let mValue = 0;
let arrayNums2 = [];
let nValue = 0;
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// SOLUTION PARA LEETCODE

// var merge = function (nums1, m, nums2, n) {
//   let last = m + n - 1;

//   //merge in reverse order
//   while (m > 0 && n > 0) {
//     if (nums1[m - 1] > nums2[n - 1]) {
//       nums1[last] = nums1[m - 1];
//       m--;
//       console.log('status a', nums1)
//     } else {
//       nums1[last] = nums2[n - 1];
//       n--;
//       console.log('status b', nums1)
//     }
//     last--;
//   }

//   //fill nums1 with leftover of nums2
//   while (n > 0) {
//     nums1[last] = nums2[n - 1];
//     last--;
//     n--;
//     console.log('status c', nums1)
//   }

//   console.log('final', nums1)
// };


// var merge = function (nums1, m, nums2, n) {
//   return nums1.slice(0, m).concat(nums2.slice(0, n)).sort();
// };

// scenario 1
arrayNums1 = [1, 2, 3, 0, 0, 0];
mValue = 3;
arrayNums2 = [2, 5, 6];
nValue = 3;

console.log('result scenario 1', merge(arrayNums1, mValue, arrayNums2, nValue));

// // scenario 2
// arrayNums1 = [1];
// mValue = 1;
// arrayNums2 = [];
// nValue = 0;

// console.log('result scenario 2', merge(arrayNums1, mValue, arrayNums2, nValue));

// // scenario 3
// arrayNums1 = [0];
// mValue = 0;
// arrayNums2 = [1];
// nValue = 1;

// console.log('result scenario 3', merge(arrayNums1, mValue, arrayNums2, nValue));
