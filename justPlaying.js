// const myFunc = function (){
//     nombre: 'yhorman'
//     return `Hola ${this.nombre}`;
// }

// const myObj = {
//     nombre: 'yhorman',
//     saludar () {
//         return 'Hola interno, soy ' + this.nombre
//     }
// }

// const anotherFunction = function () {
//     nombre: 'yhorman';

//     myMethodSaludar = function (){
//         return `Hola y bienvenido ${this.nombre}`
//     }

//     return myMethodSaludar;
// }

// console.log( myFunc());
// console.log(myObj.saludar());
// const saludar = anotherFunction();
// console.log(saludar())
// console.log(anotherFunction().call({nombre: 'emilio'}));

// // var globalA = "hola soy global";

// // function myFunc() {
// //   var globalA = "hola, soy local";
// //   console.log("call var in", globalA);
// // }

// // console.log("call var", globalA);
// // console.log("call fnc", myFunc());
// // console.log("call var", globalA);

// // let arr = [];

// // arr.push("hola");
// // arr.push("SOY");
// // arr.push("german");

// // console.log(arr);
// // arr.pop();
// // console.log(arr);
// // arr.shift();
// // console.log(arr);

// // console.log(1);
// // setTimeout(() => {
// //   queueMicrotask(() => {
// //     console.log(2);
// //   });
// //   console.log(3);
// // });
// // Promise.resolve().then(() => console.log(4));
// // queueMicrotask(() => {
// //   console.log(5);
// //   queueMicrotask(() => {
// //     console.log(6);
// //   });
// // });
// // console.log(7);

//

// const data= {
//     data1: 'hola',
//     data2: 'soy ',
//     data3: 'yhorman'
// }

// for (let property in data){
//     console.log(property);
// }
// **------------------------------
// function testing() {
//   return Promise.resolve("hola y resuelto");
// }

// function testing2 (){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('ya llegué en 2 segundoa')
//         }, 2000);
//     })
// }

// console.log("testing", testing());
// // console.log("testing2", testing2());

// ----------------------------
// const string ="this is a Javascript test ver lol midu";

// function reverse ( text, numOfWords) {
//     console.log(text.split(' ', 4).reverse().join(' '));
// }

// reverse(string);

//---------------------------
// const elements = {
//     objeto1: 'muñeca',
//     objeto2: 'gameboy',
//     objeto3: 'play 5'
// }
// function validate (container, product){
//     const keys = Object.keys(container);
//     const responses = keys.map( (prop) => {
//         if(container[prop] === product){
//             return true;
//         }
//     })

//     console.log('responses', responses)

// }

// validate(elements, 'muñeca')

//---------------------------

const data = ["UPS": [{"id": 3}]];
