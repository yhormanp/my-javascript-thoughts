/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

input examples
addTogether(2, 3) should return 5.

addTogether(23, 30) should return 53.

addTogether(5)(7) should return 12.

addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.

addTogether(2, "3") should return undefined.

addTogether(2)([3]) should return undefined.

addTogether("2", 3) should return undefined.
*/

function addTogether() {
    const [first, second] = arguments;
  if (arguments.length > 1) {
    if (typeof first !== "number" || typeof second !== "number") {
      return undefined;
    }
    return arguments[0] + arguments[1];
  } else {
    if (typeof first !== "number") {
      return undefined;
    }
    return function (secondParam) {
        if (typeof secondParam !== "number") {
            return undefined;
          }
      return first + secondParam;
    };
  }
}

console.log(addTogether(2)(5));


//another way to solve it
function addTogether2(){
    const [first, second]= arguments;
    if( typeof first !== 'number') return undefined
    if( typeof second === 'undefined'){
        return (secondNew)=> addTogether2(first, secondNew);
    }
    if(typeof second !== 'number') return undefined;
    return first + second
}

console.log(addTogether2(2)(7));
