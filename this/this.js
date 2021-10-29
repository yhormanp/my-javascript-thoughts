// function foo() {
//     console.log("simple function call")
//     console.log('foo this', this.saludo);
//     console.log('foo this', this);
// }

// let user = {
//     count: 10,
//     foo: foo,
//     foo1(){
//         console.log('this in foo1', this )
//     },
//     foo2: () => {
//         console.log('this arrow', this)
//     }
// }

// foo()
// user.foo()
// let fun1 = user.foo1;
// fun1();
// user.foo1();
// let fun2 = user.foo2;
// fun2();
// user.foo2()


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

  function Pet(type, legs) {
    this.type = type;
    this.legs = legs;
    this.logInfo = function() {
      console.log(this === myCat); // => false
      console.log(`The ${this.type} has ${this.legs} legs`);
    }
  }
  const myCat = new Pet('Cat', 4);
  // logs "The undefined has undefined legs"
  // or throws a TypeError in strict mode
  setTimeout(myCat.logInfo, 1000);


  /*
   You might think that setTimeout(myCat.logInfo, 1000) will call the myCat.logInfo(), which should log the information about myCat object.

Unfortunately the method is separated from its object when passed as a parameter: setTimout(myCat.logInfo).
  */