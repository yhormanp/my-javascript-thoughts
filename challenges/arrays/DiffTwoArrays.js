/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

inputs

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.

[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.

[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/

//OPTION 1 TO BE RESOLVED

function diffArray(arr1, arr2) {
  let higherArr = null;
  let lowerArr = null;
  let nonRepeated = [];
  if (arr1.length > arr2.length) {
    higherArr = arr1;
    lowerArr = arr2;
  } else {
    higherArr = arr2;
    lowerArr = arr1;
  }

  for (let i = 0; i < higherArr.length; i++) {
    if (!lowerArr.includes(higherArr[i])) {
      if (higherArr[i] !== undefined) {
        nonRepeated.push(higherArr[i]);
      }
    }

    if (!higherArr.includes(lowerArr[i])) {
      if (lowerArr[i] !== undefined) {
        nonRepeated.push(lowerArr[i]);
      }
    }
  }
  console.log("val", nonRepeated);
  return nonRepeated;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]
// OPTION 2  TO BE RESOLVED

function diffArray2(arr1, arr2) {
  const result = arr1.concat(arr2).filter((value) => {
    return !arr1.includes(value) || !arr2.includes(value);
  });

  console.log('result', result);
  return result;
}

diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]
diffArray2([1, "calf", 3, "piglet"], [7, "filly"] )
diffArray2([1, "calf", 3, "piglet"], [1, "calf", 3, 4])