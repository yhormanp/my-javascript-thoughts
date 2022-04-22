/* 
Steamroller
Flatten a nested array. You must account for varying levels of nesting.

input examples
steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

*/

function steamrollArray(arr) {
    console.log('inputs', arr)
    const flattenArr = [];
  
    for(let i  = 0 ; i < arr.length; i++){
      if(!Array.isArray(arr[i])){
        flattenArr.push(arr[i])
      } else {
        flattenArr.push(...steamrollArray(arr[i]))
      }
    }
    console.log('result', flattenArr);
    return flattenArr;
  }
  steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].