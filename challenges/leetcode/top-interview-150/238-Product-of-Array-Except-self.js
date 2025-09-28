// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const totalResults = [];

  const multiplyValues = (arrayOfItems) => {
    const operationResult = arrayOfItems.reduce((counter, current, index) => {
      counter *= current;
      return counter;
    }, 1);
    // // console.log('array original:', arrayOfItems, 'operationResult: ', operationResult)
    return operationResult;
  };

  for (let index = 0; index < nums.length; index++) {
    const copiedArray = nums.slice();
    copiedArray.splice(index, 1);
    // // console.log('ModArray', copiedArray)

    totalResults.push(multiplyValues(copiedArray));
  }
  // // console.log('result', totalResults)
  // for (let index = 1; index < nums.length ; index++) {
  //   const key = index;
  //   const value = nums[index] * nums[index - 1];
  //   multipliedValues.set(key, value);
  // }
  return totalResults;
};
// // solution improved avoidign to do multiple operations
var productExceptSelf2 = (nums) => {
  const maxIndex = nums.length - 1;

  // calcultar prefix and suffix
  let prefixArr = [];
  let suffixArr = [];

  prefixArr[0] = 1;
  suffixArr[maxIndex] = 1;
  for (let index = 0; index < maxIndex; index++) {
    prefixElement = nums[index] * prefixArr[index];
    prefixArr.push(prefixElement);
  }

  console.log('prefix arr', prefixArr)
  let result = [];
  let suffixVal = 1;
  for (let index = maxIndex; index >= 0; index--) {
    result.unshift(suffixVal * prefixArr[index]);
    suffixVal *= nums[index];
  }
  return result;
};

// // solution improved BETTER avoidign to do multiple operations
var productExceptSelf3 = (nums) => {
  let result = [];
  let prefixArr=[];

  let initialOperator = 1;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    prefixArr.push(initialOperator)
    initialOperator*=nums[index];
    
  }
  // console.log('prefixArr', prefixArr)
  let initialOp = 1;
  for (let index = nums.length - 1; index >= 0; index--) {

    result.unshift(initialOp * prefixArr[index] );
    initialOp*= nums[index]
    
  }
  // console.log('result', result)
  return result
}

// scenario 1
let nums = [1, 2, 3, 4];
console.log(productExceptSelf3(nums)); // EXPECTED [24,12,8,6]
// scenario 2
nums = [-1,1,0,-3,3];
console.log(productExceptSelf3(nums)); // EXPECTED [0,0,9,0,0]
// scenario 3



// // SOLUTION PROPOSED BY LEETCODE
// var productExceptSelf = function(nums) {
//     let n = nums.length
//     let out = new Array(n).fill(1)

//     let pref = 1
//     for (let i = 0; i < n; i++) {
//         out[i] = pref
//         pref *= nums[i]
//     }

//     let suff = 1
//     for (let i = n - 1; i >= 0; i--) {
//         out[i] *= suff
//         suff *= nums[i]
//     }

//     return out
// };