// 380. Insert Delete GetRandom O(1)
// Medium
// Topics
// premium lock icon
// Companies
// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.

// Constraints:

// -231 <= val <= 231 - 1
// At most 2 * 105 calls will be made to insert, remove, and getRandom.
// There will be at least one element in the data structure when getRandom is called.

//SOLUTION 1

// var RandomizedSet = function () {
//   this.set = [];
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function (val) {
//   // Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
//   if (!this.set?.includes(val)) {
//     this.set.push(val);
//     return true;
//   }
//   return false;
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function (val) {
//   // Removes an item val from the set if present. Returns true if the item was present, false otherwise.
//   if (this.set.includes(val)) {
//     let index = this.set.indexOf(val);
//     this.set.splice(index, 1);
//     return true;
//   }
//   return false;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function () {
//   // Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned
//   let min = 0;
//   let max = this.set.length - 1;
//   if (this.set.length > 0) {
//     let index = Math.floor(Math.random() * (max - min + 1)) + 0;
//     return this.set[index];
//   }
// };

//SOLUTION 2

class RandomizedSet {
  constructor() {
    this.set = [];
    this.map = new Map();
  }

  insert = () => {
    // Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
    if (!this.set?.includes(val)) {
      this.set.push(val);
      return true;
    }
    return false;
  };

  remove = () => {
    // Removes an item val from the set if present. Returns true if the item was present, false otherwise.
    if (this.set.includes(val)) {
      let index = this.set.indexOf(val);
      this.set.splice(index, 1);
      return true;
    }
    return false;
  };

  getRandom = () => {
    // Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned
    let min = 0;
    let max = this.set.length - 1;
    if (this.set.length > 0) {
      let index = Math.floor(Math.random() * max - 1) + 1 ;
      return this.set[index];
    }
  };
}

const randomNumber = () => {
  return Math.floor(Math.random() * 5) +1;
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//scenario 1
// let val = 1;
// var obj = new RandomizedSet();
// var param_1 = obj.insert(val);
// val = 4;
// var param_2 = obj.insert(val);
// console.log('scenario 1a', obj);
// val = 8;
// var param_3 = obj.insert(val);
// console.log('scenario 1b', obj);
// var param_2 = obj.remove(val);
// console.log('scenario 1c', obj);
// var param_4 = obj.getRandom();
// console.log('scenario 1d', param_4);



//scenario 2
console.log('scenario 2', randomNumber());

/// SOLUTION PROPOSED BY LEETCODE

// var RandomizedSet = function () {
//     this.map = new Map();
//     this.arr = []
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function (val) {
//     if (this.map.has(val)) return false;
//     this.arr.push(val);
//     this.map.set(val, this.arr.length - 1)
//     return true;
// };

// /**
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function (val) {
//     if (!this.map.has(val)) return false;

//     const removeIndex = this.map.get(val);
//     const lastElement = this.arr[this.arr.length - 1];

//     this.arr[removeIndex] = lastElement;
//     this.map.set(lastElement, removeIndex);

//     this.arr.pop();
//     this.map.delete(val);
//     return true;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function () {
//     const randomIndex = Math.floor(Math.random() * this.arr.length);
//     return this.arr[randomIndex];
// };
