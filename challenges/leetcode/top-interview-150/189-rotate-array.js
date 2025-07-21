// iven an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

//all must be done in 1 function called rotate

let nums = [];
let k = 0;
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//my solution
var rotate = function (nums, k) {
  console.log('validating k', k, nums.length, 'converted k', k 
    % nums.length);
  k = k % nums.length; // Handle cases where k is larger than the array length

  const elementsToMove = nums.splice(-k);
  console.log('elements to move', elementsToMove);
  nums.unshift(...elementsToMove);
  return nums;
};

// // Alternative on internet  solution using reverse method
// var rotate = function (nums, k) {
//   console.log('initial nums', nums, 'k', k);
//   k = k % nums.length; // Handle cases where k is larger than the array length

//   const n = nums.length;
//   console.log('k converted', k, 'n', n);

//   const revNums = (nums, start, end) => {
//     while (start < end) {
//       // const temp = nums[start];
//       // nums[start] = nums[end];
//       // nums[end] = temp;
//       [nums[start], nums[end]] = [nums[end], nums[start]]; // Swap elements
//       start++;
//       end--;
//     }
//   };

//   // Reverse the entire array
//   nums.reverse();
//   console.log('nums after reverse', nums);

//   // Reverse the first k elements
//   revNums(nums, 0, k - 1);
//   console.log('nums after reversing first k elements', nums);

//   // Reverse the remaining n - k elements
//   revNums(nums, k, n - 1);
//   console.log('nums after reversing remaining elements', nums);

//   return nums;
// };

// scenario 1
nums = [1, 2, 3, 4, 5, 6, 7];
k = 3;
console.log('scenario 1', rotate(nums, k)); // expected = [5,6,7,1,2,3,4]

// scenario 2
nums = [-1, -100, 3, 99];
k = 2;

console.log('scenario 2', rotate(nums, k)); // expected = [ 3, 99, -1, -100 ]

// scenario 3
nums = [1, 2];
k = 3;
console.log('scenario 3', rotate(nums, k)); // expected = [2, 1]

// scenario 4
nums = [1, 2, 3];
k = 4;
console.log('scenario 4', rotate(nums, k)); // expected = [3,1,2]

// scenario 5
nums = [1, 2, 3, 4, 5, 6];
k = 11;
console.log('scenario 5', rotate(nums, k)); // expected = [2,3,4,5,6,1]
