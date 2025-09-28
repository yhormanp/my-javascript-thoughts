// // 45. Jump Game II

// // You are given a 0-indexed array of integers nums of length n. You are initially positioned at index 0.

// // Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at index i, you can jump to any index (i + j) where:

// // 0 <= j <= nums[i] and
// // i + j < n
// // Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.

// // Example 1:

// // Input: nums = [2,3,1,1,4]
// // Output: 2
// // Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// // Example 2:

// // Input: nums = [2,3,0,1,4]
// // Output: 2

// // Constraints:

// // 1 <= nums.length <= 104
// // 0 <= nums[i] <= 1000
// // It's guaranteed that you can reach nums[n - 1].

/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
//   let maxReach = 0;
//   let jumpsCount = 0;
//   for (let index = 0; index < nums.length; index++) {
//     if (index > maxReach) {
//       return false;
//     }
//     if(nums.length === 1){
//       return 0;
//     }
//     else {
//       jumpsCount = index + nums[index] > maxReach ? jumpsCount + 1 : jumpsCount;
//       maxReach = Math.max(maxReach, index + nums[index]);
//       // if ( index + nums[index] > maxReach ){
//       //   console.log('new maxReah has been set:', maxReach);
//       // }

//       if (maxReach >= nums.length - 1) {
//         return jumpsCount;
//       }
//     }
//   }

//   return false;
// };

// solution proposed by leetcode
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var jump = function(nums) {
//     if (nums.length <= 1) {
//         return 0; // Already at the end or no jumps needed
//     }

//     let jumps = 0; // Number of jumps taken
//     let currentReach = 0; // The farthest index reachable with the current number of jumps
//     let maxReach = 0; // The overall farthest index reachable

//     for (let i = 0; i < nums.length - 1; i++) {
//         // Update the maximum reach we can achieve from the current position
//         maxReach = Math.max(maxReach, i + nums[i]);

//         // If we have reached the limit of our current jump,
//         // it means we need to take another jump.
//         console.log('comparing i:', i, 'currentReach:', currentReach, 'maxReach:', maxReach);
//         if (i === currentReach) {
//             jumps++; // Increment jump count
//             currentReach = maxReach; // Update current reach to the new maxReach
//             // If the new currentReach is already beyond or at the last index,
//             // we have found the minimum jumps.
//             if (currentReach >= nums.length - 1) {
//                 break;
//             }
//         }
//     }
//     return jumps;
// };

var jump = function (nums) {
  let maxReach = 0; // maximum index we can reach
  let jumpsCount = 0; // number of jumps taken
  let currentReach = 0;

  if (nums.length <= 1) {
    return 0; // Already at the end or no jumps needed
  }

  for (let i = 0; i < nums.length; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log('comparing i:', i, 'currentReach:', currentReach, 'maxReach:', maxReach, 'i+nums[i]:', i + nums[i]);
    if (i === currentReach) {
      jumpsCount++;
      currentReach = maxReach

      if (maxReach >= nums.length - 1) {
        return jumpsCount;
      }
    }
  }
};

//SCENARIO 1
nums = [2, 3, 1, 1, 4];
console.log('scenario 1: ', jump(nums));

//SCENARIO 1
nums = [2, 3, 0, 1, 4];
console.log('scenario 2: ', jump(nums));

//SCENARIO 3
nums = [0];
console.log('scenario 3: ', jump(nums));

//SCENARIO 4
nums = [1];
console.log('scenario 4: ', jump(nums));

//scenario 5
nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];
console.log('scenario 5: ', jump(nums));

//scenario 6
nums = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
console.log('scenario 6: ', jump(nums));
