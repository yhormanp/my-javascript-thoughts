/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/


function getIndexToIns(arr, num) {
    arr.sort((a,b)=> a - b );
    const index = arr.reduce((found, value)=> {
      if ( value < num){
        found ++;
      }
      return found;
    },0)
    console.log('val', arr, num, index)
    return index;
  }
  
  getIndexToIns([40, 60], 50); // 1
  getIndexToIns([3, 10, 5], 3) // 0.
  getIndexToIns([5, 3, 20, 3], 5) // 2.
  getIndexToIns([2, 20, 10], 19) // 2.
  getIndexToIns([2, 5, 10], 15) // 3.
  // another wat to do it.

  function getIndexToIns2(arr, num) {
      const index = arr.concat(num).sort((a,b) => a - b).indexOf(num);
      console.log ('val2', arr, num, index);
      return index;
  }
  getIndexToIns2([40, 60], 50); // 1
  getIndexToIns2([3, 10, 5], 3) // 0.
  getIndexToIns2([5, 3, 20, 3], 5) // 2.
  getIndexToIns2([2, 20, 10], 19) // 2.
  getIndexToIns2([2, 5, 10], 15) // 3.