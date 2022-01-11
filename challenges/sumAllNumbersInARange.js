/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
input paramteres

[ 1, 4 ]
[ 4, 1 ]
[ 5, 10 ]
[ 10, 5 ]

expected result
10
10
45
45

*/


function sumAll(arr) {
    const sortedArr = arr.slice().sort((a,b)=>{
      return a-b
    });
    let totalSum = 0;
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
      totalSum += i;
    }
    console.log(totalSum)
  
    return totalSum
  }
  
  sumAll([1, 4]);
  sumAll([4, 1]);
  sumAll([5, 10]);
  sumAll([10, 5]);
