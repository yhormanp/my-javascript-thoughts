// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

let nums = [];
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
// let maximum = 0 ;
// const filtered = new Set(nums.sort());
// filtered.forEach((item, index) => {
//   let currentFindings = nums.filter((num)=> num === item);
//   if (currentFindings > maximum)
//     maximum = currentFindings;
// }
// // ordered in asc order and taking the last element
// console.log('test', [...filtered].slice(-1));

// return [...filtered].slice(-1)[0]; // to return it just like a number

// };

const majorityElement = () => {
  let candidate = 0;
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      candidate = nums[i];
    } else if (nums[i] === candidate) {
      counter++;
    } else {
      counter--;
    }
  }

  return candidate;
};

// scenario 1
nums = [3, 2, 3];
console.log('scenario 2', majorityElement(nums)); // expected: 3

//scenario 2
nums = [2, 2, 1, 1, 1, 2, 2];
console.log('scenario 2', majorityElement(nums)); // expected: 2
