// FUNCTION INVOCATION
/*
In a function invocation, the execution context is the global object. (global -Nodejs, window -browser)
this is undefined in a function invocation in strict mode
*/


// function sum ( a, b){
//   console.log (this) // global o window element
//   this.myNumber = 20
//   return a + b;
// }

// console.log(sum(15, 16)); // 31
// console.log(global.myNumber); //20

// FUNCTION INVOCATION AFTER A METHOD INVOCATION
/*
  If any function is called as a method invocation (SUM) and that method invocation is calling another function  (CALCULATE) just as a function invocation ,
  then this refers to the global object.
  SOLUTION 1:To solve this you can   change manually the context of calculate() to the desired one by calling calculate.call(this)
  SOLUTION 2: Define calculate as an arrow function
*/

// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum() {
//     console.log(this === numbers) // true

//     function calculate() {
//       console.log(this === numbers) // false
//       return this.numberA + this.numberB;
//     }
//     return calculate();  // it's a function invocation
//     // return calcular.call(this) // possible solution
//   }

// }

// console.log(numbers.sum()); // it's a method invocation but returns  NaN


// METHOD INVOCATION
/*
  this is the object that owns the method in a method invocation
*/

// const calc = {
//   num: 0,
//   increment() {
//     console.log(this === calc); // true
//     this.num += 1;
//     return this.num;
//   }
// }

// console.log(calc.increment()); // 1
// console.log(calc.increment()); // 2

// another example

// const myDog = {
//   name: 'none',
//   sayName() {
//     console.log(this === myDog)
//     return this.name;
//   }
// }

// myDog.name = 'milo';
// console.log(myDog.sayName()); // milo

// // another example

// const object = {
//   message: 'Hello world',

//   getMessage() {
//     const message = 'Hello Earth';
//     console.log(message) // hello Earth
//     return this.message;
//   }
// }

// console.log(object.getMessage()) // hello world
/*
  object.getMessage() is a method invocation, that’s why this inside the method equals object.
*/


// SEPARATING METHODS FROM IT'S OBJECT

/*
A method can be extracted from an object into a separated variable const alone = myObj.myMethod.
When the method is called alone alone(), detached from the original object, THIS refers to the global  because
it will be callint the action as a function invocation

*/

// const myDog = {
//   name: 'none',
//   sayName() {
//     console.log(this === myDog)
//     return this.name;
//   }
// }

// myDog.name = 'milo';
// console.log('method invocation', myDog.sayName()); // milo is returned
// const myFunc = myDog.sayName;
// console.log('function invocation', myFunc()); //undefined is returned


// another example

// function Pet(type, legs) {
//   this.type = type;
//   this.legs = legs;

//   this.logInfo = function () {
//     console.log(this === myCat) // false
//     console.log(`the ${this.type} has ${this.legs} legs`)
//   }
// }

// const myCat = new Pet('Cat', 4);
// setTimeout(myCat.logInfo, 1000); //the undefined has undefined legs

/*
Unfortunately the method is separated from its object when passed as a parameter: setTimout(myCat.logInfo)
When the separated logInfo is invoked as a function, this is global object or undefined in strict mode (but not myCat object)

SOLUTIONS:
Create logInfo as an arrow function
Create a bound function ex:
const boundLogInfo = myCat.logInfo.bind(myCat);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);
*/



// CONSTRUCTOR INVOCATION
/*
this is the newly created object in a constructor invocation
performed when new keyword is followed by an expression that evaluates to a function object,
an open parenthesis (, a comma separated list of arguments expressions and a close parenthesis )
*/

// function Foo() {
//   this.property = 'Default value';
// }

// // constructor invocation
// const fooInstance = new Foo();
// console.log(fooInstance.property); // 'Default value'

/*
The same scenario happens when using class syntax (available in ES2015),
only the initialization happens in the constructor method:
*/

// class Bar {
//   constructor (){
//     this.property = 'Default value';
//   }
// }

// // constructor invocation 
// const barInstance = new Bar();
// console.log(barInstance.property); // Default value


// FORGETTING ABOUT NEW IN THE CONSTRUCTOR INVOCATION
/*
Using a function invocation to create objects is a potential problem (excluding factory pattern),
because some constructors may omit the logic to initialize the object when new keyword is missing.
*/


// function Vehicle(type, wheelsCount) {
//   this.type = type;
//   this.wheelsCount = wheelsCount;
//   return this;
// }

// const car = Vehicle('car', 4);
// car.type; // car
// car.wheelsCount // 4
// console.log(car === global);

/*
Without the "New" reserved word, This refers to global/window object, because it's being called as a function invocation,
thus Vehicle('Car', 4) sets properties on the window object. This is a mistake. A new object is not created
Make sure to use new operator in cases when a constructor call is expected
*/

// how to be sure the function will be called with the new word
// function Vehicle(type, wheelsCount) {
//   if (!(this instanceof Vehicle)) {
//     throw Error('Error: Incorrect invocation');
//   }
//   this.type = type;
//   this.wheelsCount = wheelsCount;
//   return this;
// }
// // Constructor invocation
// const car = new Vehicle('Car', 4);
// car.type               // => 'Car'
// car.wheelsCount        // => 4
// car instanceof Vehicle // => true
// // Function invocation. Throws an error.
// const brokenCar = Vehicle('Broken Car', 3);



// INDIRECT INVOCATION
/* Is performed when a function is called using myFun.call() or myFun.apply() methods.
this refers to the first argument of .call() or .apply() in an indirect invocation
*/
// function sum(number1, number2) {
//   return number1 + number2;
// }

// sum.call(undefined, 10, 2);
// sum.apply(undefined, [10, 2]);

// // another example

// const rabbit = { name: 'White Rabbit'};

// function concatName (string) {
//   console.log( this === rabbit) // true;
//   return  string + this.name;
// }

// // indirect invocations
// concatName.call(rabbit, 'Hello '); // Hello White Rabbit
// concatName.apply(rabbit, ['Bye ']) // Bye White Rabbit


// Another practical example is creating hierarchies of classes in ES5 to call the parent constructor:
//  function Runner (name) {
//    console.log (`I am ${name} and I am a runner `);
//    this.name = name;
//  }

//  function Rabbit (name, countLegs) {
//    console.log(this instanceof Rabbit);
//    // indirect invocation. Call parent constructor
//    Runner.call(this, name);
//    this.countLegs = countLegs;
//  }

//  const myRabbit = new Rabbit('White Rabbit', 4);
//  console.log(myRabbit); // { name: 'White Rabbit', countLegs: 4}





// BOUND FUNCTION 
/*
is a function whose context and/or arguments are bound to specific values. You create a bound function using .bind() method
This is the first argument of myFunc.bind(thisArg) when invoking a bound function
The following code creates a bound function and later invokes it:
*/

// function multiply(number) {
//   'use strict';
//   return this * number;
// }

// // create a bound function with context ( this refers to 2)
// const double = multiply.bind(2);
// console.log(double(3)); // 6
// console.log(double(10)); // 20


// // another example
// const number = {
//   array: [3, 5, 10],

//   getNumbers() {
//     return this.array;
//   }
// }

// // create a bound function 
// const boundGetNumbers = number.getNumbers.bind(number);
// boundGetNumbers; // [3,5,10]

// // Extract method from Object - (separating method from it's object will return undefined or error)
// const simpleGetNumbers = number.getNumbers;
// console.log(simpleGetNumbers()); //  undefined or throws an error in strict mode




// ARROW FUNCTION 

/*
Arrow function is designed to declare the function in a shorter form and lexically bind the context.
this is the enclosing context where the arrow function is defined
t doesn’t provide the arguments object, opposed to a regular function.
The missing arguments is fixed using ES2015 rest parameters:
*/

// // basic example
// var myArrowFunction = () => {
//   console.log(this); // global or window object
//   return this;
// }

// myArrowFunction(); // this is global


// another example

// function foo() {
//   console.log('foo this', this);
// }
// let user = {
//   count: 10,
//   foo: foo,
//   foo1() {
//     console.log('this in foo1', this)
//   },
//   foo2: () => {
//     console.log('this arrow function ', this)
//   }
// }

// user.foo()// (method invocation) returns user Object
// user.foo1() // (regular function- method invocation) return user Object
// user.foo2() // (arrow function) return global / window object


// // another example
// class Point {
//   constructor(x, y ){
//     this.x = x;
//     this.y  = y;
//   }

//   log() {
//     console.log(this === myPoint) // true
//     setTimeout(() => {
//       console.log(this === myPoint) // true
//       console.log(this.x + ':' + this.y) // 95:165
//     }, 1000);
//   }
// }

// const myPoint = new Point ( 95,165);
// myPoint.log()





// let greetings = {
//     word: 'hello',
//     printGreeting(){
//         console.log('greetings this', this);
//     },
//     print : () =>{
//         const baz = () =>  this;
//         console.log('this is baz', baz());
//         return baz();
//     },
//     bar: () => this

// }

// greetings.printGreeting()
// greetings.print()
// console.log('this is bar', greetings.bar())

// ***********************************************

// var u = {
//     saludo: 'hola',
//     saludar: function () {
//         setTimeout(foo, 1000);
//     }
// }

// u.saludo;
// u.saludar()




// ***********************************************
// difference between a function invocation and a method invocation
/*
this  is the global object in a function invocation
this is the object that owns the method in a method invocation
*/
// const numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//       console.log('this inside sum', this)
//       console.log(this === numbers); // => true
//       function calculate() {
//         // this is window or undefined in strict mode
//         console.log('this inside calculate', this)
//         console.log(this === numbers); // => false
//         console.log ('operation inside of calculate',this.numberA + this.numberB)
//         return this.numberA + this.numberB;
//       }
//       return calculate();
//       // return calculate.call(this); // possible solution to do the operation with this
//     }
//   };
//   console.log('method invocation sum',numbers.sum()); // => NaN or throws TypeError in strict mode
// ***********************************************
/*
The following example defines Pet constructor and makes an instance of it: myCat.
 Then setTimout() after 1 second logs myCat object information:
*/

  // function Pet(type, legs) {
  //   this.type = type;
  //   this.legs = legs;
  //   this.logInfo = function() {
  //     console.log(this === myCat); // => false
  //     console.log(`The ${this.type} has ${this.legs} legs`);
  //   }
  // }
  // const myCat = new Pet('Cat', 4);
  // // logs "The undefined has undefined legs"
  // // or throws a TypeError in strict mode
  // setTimeout(myCat.logInfo, 1000);


/*
 You might think that setTimeout(myCat.logInfo, 1000) will call the myCat.logInfo(), which should log the information about myCat object.

Unfortunately the method is separated from its object when passed as a parameter: setTimout(myCat.logInfo).
*/

// guess the outpu of the following code
const a = function(){
  console.log(this); //global/window 

  const b = {
    func1: function(){
      console.log(this);
    }  
  }

  const c = {
    func2: ()=>{
      console.log(this);
    }
  }

  b.func1(); //b
  c.func2(); //global/window
}

a();

/* 
global/window object
object "b"
global/window object

Since we are using arrow function inside func2, this keyword refers to the global object.
*/