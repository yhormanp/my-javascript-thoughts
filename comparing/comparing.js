/* In JavaScript, there are 6 falsy values. If you convert any of these to a boolean, it will return false.

false
undefined
null
NaN
0
"" (empty string)
Anything not on the falsy list, will return true 
*/

let foo; // undefined
let bar = null;
console.log ('converting to boolean values', Boolean (foo), Boolean (null) )
console.log ('converting to boolean values with !!', !!foo, !!null)
console.log( (bar == foo)) // true  -- checking just equality
console.log( (bar === foo)) // false --checking equality and type

