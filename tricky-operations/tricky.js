// **************************************
// console.log(2 + '2') // 22
// console.log(2 - '2') // 0, because it will not work on strings

// **************************************
// let nums =[1,2,2,3]; // remove the duplicated numbers with just single line

// console.log([...new Set(nums)]) // Set will not allow duplicated values

// **************************************
// let func =  function () {
//     {
//         let l = 'let';
//         var v = 'var'
//     }
//     console.log(v) // due  to hoisting this is recognized
//     console.log(l) // l is not defined - hoisting does not work with let or const
// }

// func ()

// **************************************
// console.log( 5 < 6 < 7); // true
// // step 1 , 5 is less than 6, true
// // step 2,  true < 7   ( 1 < 7), this is true
// console.log(7 > 6 > 5); // false
// // step 1 , 7 is higher than 6, true
// // step 2,  true > 5   ( 1 > 5), this is false

// **************************************
// let a = () => arguments;
// console.log('arguments with a', a('hi')); // nothing is returned because  arguments cannot be used insde an arrow function

// let b = function (){ return arguments }; // nothing is returned because  arguments cannot be used insde an arrow function
// console.log('arguments with b', b('hi')); // list of arguments is retured because arguments exists inside a function definition

// **************************************
// let  x = function (){
//     return
//     {
//         message: 'hi'
//     }
// }
// console.log(x()); // receives undefined, because return has nothing else  on it's line to be returned

// // the right use of return is this
// let xx= function () {
//     return {
//         message: 'hi'
//     }
// }
// console.log(xx()); // receives the object with the property message

// **************************************
// console.log([] + []) // returns an empty string, because it will try to convert the empty array to string,
// console.log(String([]) ) // it will return empty string

// **************************************
// function a() {
//     return 'hello world'
// }

// const sentence = a'hi'; // this works as tagged templates
// console.log(sentence)  // return hello worl

// **************************************
// function  y () {
//     console.log(this.length)
// }

// var x = {
//     length: 5,
//     method: function (y) {
//         arguments[0]()
//     }
// }

// x.method(y, 1)
/* it returns 2, because it has the context where it was executed it means arguments, so the sentence, 
this.length is the length of properties on arguments, not the property length of the object x*/

// **************************************

// const x  = 'constructor'

// console.log(x[x]('01')) // this returns 01
/* this will create a string, which has a property by default of type called constructor, 
wich receives a param to try to convert it into a string
this is the final sentence that will run
x.constructor('01)
*/

// **************************************
// console.log(0.1 + 0.2) // result 0.30000000000000004
// **************************************
// create a function that return the total of arguments
// let myFunction=  function (){
//     console.log('to be returned ', [].slice.call(arguments).length)
//     console.log('another solve ', arguments.length)
//     return [].slice.call(arguments).length
// }

// console.log(myFunction(1,2,3,4,5,6)) // returns 6

// **************************************
// how to make this object and its methods to return x y z
// var A = {
//     x: function (){
//         console.log('x');
//         return this ; // solution
//     },
//     y: function (){
//         console.log('y');
//         return this ; // solution
//     },
//     z: function (){
//         console.log('z');
//         return this ; // solution
//     },
// }
// A.x().y().z(); // it returns cannot read property y of undefined

/* this is because it's trying to execute another method from the same object, but when it's executed the instance is lost
to solve this and let it execute, x().y().z() every function must return the object A or the instance This
ex:
 x: function (){
        console.log('x');
        return this;
    },

solved
var A = {
    x: function (){
        console.log('x');
    },
    y: function (){
        console.log('y');
    },
    z: function (){
        console.log('z');
    },
}
A.x().y().z(); // it returns xyz

*/

// **************************************
// // 2.toString() // this will raise a Invalid or unexpected token
// console.log(2..toString()); // the second point is correctly recognized
// console.log(2 .toString()); // note the space left to the dot
// console.log((2).toString()); // 2 is evaluated first
// **************************************

// Deleting Properties
// The only way to remove a property from an object is to use the delete operator;
// setting the property to undefined or null only removes the value associated with the property,
// but not the key.

// var obj = {
//     bar: 1,
//     foo: 2,
//     baz: 3
// };
// obj.bar = undefined;
// obj.foo = null;
// delete obj.baz;

// for(var i in obj) {
//     if (obj.hasOwnProperty(i)) {
//         console.log(i, '' + obj[i]);
//     }
// }

// bar undefined
// foo null

// **************************************
// accidental variables
// function foo (){
//     let a = b = 0;
//     a++;
//     return a;
// }

// foo();
// console.log(typeof a); // undefined
// console.log(typeof b); // number

// **************************************
// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]); // => undefined
// console.log(clothes) // []
/*
Reducing the value of the length property has the side-effect of deleting own array elements
whose array index is between the old and new length values
*/
// **************************************

// What is the content of numbers array:

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++); {
//     numbers.push(i + 1);
// }
// numbers; // => 5

/* due to the ; right befor the open brackets in the for sentence, 
The null statement is an empty statement that does nothing.
for() iterates 4 times over the null statement (that does nothing), 
ignoring the block that actually pushes items to array: { numbers.push(i + 1); }.
for() increments i variable until 4. Then JavaScript enters one time the block { numbers.push(i + 1); }, 
pushing 4 + 1 to numbers array.
*/
// **************************************
// What value is returned by arrayFromValue()?

// function arrayFromValue(item) {
//     return
//     [item];
// }
// arrayFromValue(10); // => undefined

// **************************************

// What will output to console the following code:

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// the output is 3 3 3
// review the solution here, question 5,  related to closures (https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)
// **************************************

// What’s the result of the equality check?

// console.log(0.1 + 0.2 === 0.3) // => ??? false
// The sum of 0.1 and 0.2 numbers is not exactly 0.3, it is 0.30000000000000004
// **************************************
// What happens if you access myVar and myConst before declaration?

// myVar;   // => ??? // hoisting is applied to  declare var variables at the top
// myConst; // => ??? // referenceError: cannot access myConst
// var myVar = 'value';
// const myConst = 3.14;

// **************************************
// Delayed greetings

// What logs to console the following code snippet:

// const object = {
//   message: 'Hello, World!',
//   logMessage() {
//     console.log(this.message); // What is logged?  R: // undefined
//   }
// };
// setTimeout(object.logMessage, 1000);

/*
    While setTimeout() function uses the object.logMessage as a callback, still, 
    it inovkes object.logMessage as a regular function, rather than a method.
    This will give to THIS, the value of undefined ( FUNCTION INVOCATION)

*/

// **************************************
// Artificial Method

// //How can you call logMessage function so that it logs "Hello, World!"?
// const object = {
//     message: 'hello world'
// }

// function logMessage() {
//     console.log(this.message) // Hello world
// }
// // Answer
// // Using func.call() method
// logMessage.call(object);
// // Using func.apply() method
// logMessage.apply(object);
// // Creating a bound function
// const boundLogMessage = logMessage.bind(object);
// boundLogMessage();

// **************************************

// // Greeting and farewell
// // What logs to console the following code snippet:

// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
//   farewell2 () {
//       const val = () => `Goodbye, ${this.who}!`;
//       return val();
//   }
// };
// console.log(object.greet());    // What is logged? R: Hello World
// console.log(object.farewell()); // What is logged? R: Goodbye undefined
// console.log(object.farewell2()) ; // What is logged? R: Goodbye undefined
/* 
When calling object.greet(), inside the method greet() this value equals object because greet is a regular function.
Thus object.greet() returns 'Hello, World!'.
But farewell() is an arrow function, so this value inside of an arrow function always equals this of the outer scope.
*/
// **************************************
/*
What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? 
How can this pitfall be avoided?
*/

//in Javascript null is also considered an object
// var bar = null;
// console.log(typeof bar === "object") // true

// // to avoid this, add a new validation to detect if bar is !== null
// console.log((bar !== null) && (typeof bar === "object"));  // logs false

// **************************************
//what is the output in the console
// (function (){
//     var a = b = 3;
// })()

// console.log("a defined? " + (typeof a !== 'undefined')); // a defined false
// console.log("b defined? " + (typeof b !== 'undefined')); // b defined true

/*
var a = b = 3; is shorthand for the statements b = 3; and var a = b;, b ends up being a global variable 
(since it is not preceded by the var keyword) and is therefore still in scope even outside of the enclosing function.
*/

// **************************************
// differences between method invocation and function invocation ( to understand the value of THIS)
// var myObject = {
//     foo: 'bar',
//     func: function (){
//         var self = this; // func was called using method invocation, so THIS is myObject
//         console.log("outer func:  this.foo = " + this.foo); // outer func:  this.foo = bar
//         console.log("outer func:  self.foo = " + self.foo); // outer func:  self.foo = bar
//         (function () {
//             // this IIFE executes as a function invocation, so THIS is the global object
//             console.log("inner func:  this.foo = " + this.foo); // inner func:  this.foo = undefined
//             console.log("inner func:  self.foo = " + self.foo); // inner func:  self.foo = bar
//         })()
//     }
// }

// myObject.func() // calling as a method invocation (Here THIS will be object before the . it mean, myObject)

// **************************************

// guess the ouput of the following operation

var x = 23;

function validX() {
  var x = 43;
  console.log("hola soy x en validX", x); // 43 x it has function scope
}

(function () {
  var x = 11;
  console.log("hola soy x", x); // 11, X it has function scope
})();

(function () {
  var x = 11;

  (function random() {
    x++;
    console.log("hola soy x de nuevo", x); // NaN , random() function has functional scope, since x is declared and hoisted in the functional scope.
    var x = 21;
  })();
})();

validX();
// **************************************

// **************************************

// **************************************

// **************************************

// **************************************

// **************************************

// **************************************
