// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

let nums = [];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // let positionToReview = 0;
  // let isEndReached = false;
  // while (!isEndReached) {
  //   const maxPositionsToMove = nums[positionToReview];

  // }

  const len = nums.length;
  let maxReach = 0; // maximum index we can reach

  for (let i = 0; i < len; i++) {
    // If the current index is not reachable from the previous indices
    // return false
    if (i > maxReach) {
      console.log('position not reachable from previous indices', i, maxReach);
      return false;
    }
    // Update the maximum reachable index
    console.log('validating max reacheable index:', i, maxReach, ':', i + nums[i]);

    maxReach = Math.max(maxReach, i + nums[i]);
    // If we can reach the end, return true
    console.log('validating reaching the ed', maxReach, ':', len - 1);

    if (maxReach >= len - 1) {
      return true;
    }
  }
  // We've iterated through the array and haven't reached the end,
  // so return false
  return false;
};

//SCENARIO 1
nums = [2, 3, 1, 1, 4];
console.log('scenario 1: ', canJump(nums));

//SCENARIO 1
nums = [3, 2, 1, 0, 4];
console.log('scenario 2: ', canJump(nums));
