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

// let input = [
//     { name: "John", age: 21, city: "New York" },
//     { name: "Mike", age: 28, city: "Moscow" },
//     { name: "Danny", age: 30, city: "London" },
//     { name: "Lisa", age: 26, city: "Paris" },
//     { name: "Sophie", age: 19, city: "Berlin" },
//   ];

// function extractValues (arr) {
//     return arr.map((info) => info.name);
// }

// console.log(extractValues(input))

// -------------------------
// const listOfroles = {
//   admin: "admin",
//   readOnly: "readonly",
// };

// const objUser = {
//   roles: ["admin", "rolx2"],
// };

// const menuOptions = {
//   manageCarrierCapsReadOnly: {
//     name: "Manage Carrier Caps",
//     url: "/report/readonly",
//     // renderingMethod: ManageCarrierCapsReadOnlyLink,
//     allowedRoles: [listOfroles.readOnly],
//   },
//   manageCarrierCapsAdmin: {
//     name: "Manage Carrier Caps",
//     url: "/report/admin",
//     // renderingMethod: ManageCarrierCapsAdminLink,
//     allowedRoles: [listOfroles.admin],
//   },
//   supportedCarriers: {
//     name: "Supported carriers",
//     url: "/report/supportedCarriers",
//     // renderingMethod: StoreSupportedCarriersLink,
//     allowedRoles: [listOfroles.admin, listOfroles.readOnly],
//   },
//   parcelDetails: {
//     name: "Parcel Details",
//     url: "/parcel-details",
//     // renderingMethod: ParcelDetailsLink,
//     allowedRoles: [ listOfroles.readOnly],
//   },
//   deliverySearch: {
//     name: "Search Package Delivery",
//     url: "/delivery-search",
//     // renderingMethod: DeliverySearchLink,
//     allowedRoles: [listOfroles.admin, listOfroles.readOnly],
//   },
// };

// function validateRoles(user, menu) {
//   const allowed = Object.keys(menu).map((option) => {
//     // console.log ('check', menu[option])

//      return menu[option].allowedRoles.some((role) => {
//       return user.roles.includes(role);
//     });
//   });

//   console.log('allowed links', allowed)
// }

// validateRoles(objUser, menuOptions);



//*****************************
// function newTransactions (transArr){
//     const transObj={}
//     transArr.forEach((currency)=>{
//     !transObj[currency[0]]?
//     (
//     transObj[currency[0]]={
//     buy:0,
//     sell:0, 
//     }
    
//     currency[1]==='buy'?transObj[currency[0]].buy+=currency[2]:transObj[currency[0]].sell+=currency[2]
//     )
//     :
//     transObj[currency[0]][currency[1]]+=currency[2]
//     })
//        return transObj
//     }
//     console.log(newTransactions(transactions))




//---------------------

// function testing ({value }){
//   console.log('hola ', value);
//   return 2
// }


// function testing2 ( {apicall}){
//   console.log('testin2', apicall())
// }


// testing2 ({apicall: ()=> testing({value: 'yhorman' })})


const toEnUsDateString = (date) => {
  return date.toLocaleDateString('sv');
};


const myDate = new Date();

console.log('testing date', toEnUsDateString(myDate))