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
// const numbers = {
//   numberA: 5,
//   numberB: 10,
//   sum: function() {
//     console.log('this inside sum', this)
//     console.log(this === numbers); // => true
//     function calculate() {
//       // this is window or undefined in strict mode
//       console.log('this inside calculate', this)
//       console.log(this === numbers); // => false
//       console.log ('operation inside of calculate',this.numberA + this.numberB)
//       return this.numberA + this.numberB;
//     }
//     return calculate();
//     // return calculate.call(this); // possible solution to do the operation with this
//   }
// };
// console.log('method invocation sum',numbers.sum()); // => NaN or throws TypeError in strict mode

// for(let i = 1; i <= 31; i++){
//   console.log('op i % 7',i,  i % 7)
//   console.log('val',i,  i % 7 !== 0)
// }

//-----------------------

// //group by currency
const transactions = [
  ['usd', 'buy', 5000],
  ['mxn', 'buy', 8000],
  ['usd', 'sell', 12000],
  ['gbp', 'buy', 8000],
  ['eur', 'sell', 7000],
  ['usd', 'sell', 18000],
  ['gbp', 'buy', 11000],
  ['mxn', 'buy', 2000],
  ['usd', 'buy', 5000],
];

function groupedTransactions(listOfTransactions) {
  return listOfTransactions.reduce((total, current) => {
    const [currency, operationType, value] = current;

    const existentRow = total[currency];

    switch (operationType) {
      case 'buy':
        total[currency] = existentRow
          ? [existentRow[0] + value, existentRow[1]]
          : [value, 0];
        break;
      case 'sell':
        total[currency] = existentRow
          ? [existentRow[0], existentRow[1] + value]
          : [0, value];
        break;
    }


    return total;
  }, {});
}

console.log('grouped Transactions', groupedTransactions(transactions));
// -----------------------


//-----------------------
/*
// return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
// */


// function titleCase(completeWord) {
//   const listOfWords = completeWord.split(' ');
//   return listOfWords.map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ') 
// }


// console.log(titleCase("every time i forgot to call"));

//-----------------------
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise


// function areAllEqual (listOfValues) {
//   return listOfValues.every((current) => current === listOfValues[0])
//   //  return new Set(listOfValues).size === 1
// }


// console.log(areAllEqual(['hola', 'hola', 'hola']));
// console.log(areAllEqual(['hola', true, 'hola']));
// console.log( areAllEqual([2, 2, , 4]));
// console.log( areAllEqual(['you', 'you', 'you']));


// const a = undefined
// let b = a ?? 9


// console.log('b', b)


// function sayHi (){
//   return ()=> 0
// }

// const sayHi2 = (()=> 0)()

// console.log('type of' , sayHi2)

