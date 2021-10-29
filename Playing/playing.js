
// function myLocalScope() {
//     var myVar = 35;
//     // Only change code below this line
  
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
  
//   // Run and check the console
//   // myVar is not defined outside of myLocalScope
//   console.log('outside myLocalScope', myVar); 
//   var myVar = 20;



  // ***********************************************+
// var a = 43

// function test (){
//     console.log(++a);
//     console.log(a);
//     a = 5;
// }

// test()


// var someVar = "Hat";
// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }

// console.log('val', myFun())

// ***********************************************
// let foo

// console.log(typeof foo); // undefined as string
// console.log(typeof bar); // undeclared but also returns "undefined"

// ***********************************************
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log('this inside sum', this)
    console.log(this === numbers); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log('this inside calculate', this)
      console.log(this === numbers); // => false
      console.log ('operation inside of calculate',this.numberA + this.numberB)
      return this.numberA + this.numberB;
    }
    return calculate();
    // return calculate.call(this); // possible solution to do the operation with this
  }
};
console.log('method invocation sum',numbers.sum()); // => NaN or throws TypeError in strict mode