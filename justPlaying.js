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


//-------------------------------------------

function CityTraffic(strArr) {

  // code goes here  
  const adjacentCities = new Map();
  strArr.forEach((value) => {
    const info = value.split(':')
    const population = info[0];
    const otherCities = info[1].substring(1, info[1].length - 1).split(',')
    adjacentCities.set(population, new Set(otherCities))
  })

  let reviewed = new Set();
  let maxPopulation = 0;

  const dfs = key => {
    console.log('dfs called', key)
    reviewed.add(key);
    console.log('checking maxpop', maxPopulation)

    console.log('checking neighbors', key, adjacentCities.get(key))
    let closerCities = adjacentCities.get(key);


    for (let city of closerCities) {
      console.log('dependency city', city)
      if (!reviewed.has(city)) {
        console.log('city does not exists- visiting and adding', city)
        maxPopulation += parseInt(city);

        dfs(city);
      } else {
        console.log('city already visited')
      }
    }

  }

  let result = [];
  let individualPath = [];
  for (let [key, value] of adjacentCities.entries()) {

    if (value.size > 1) {
      console.log('checking several depency cities', key)
      for (let city of value) {
        console.log('testing', city)
        // maxPopulation = parseInt(city)
        dfs(city)
        individualPath.push( parseInt(maxPopulation))
        maxPopulation = 0;
        reviewed = new Set()
      }
      // console.log('indi', individualPath)
      maxPopulation = Math.max(...individualPath)

      // console.log('individual path', individualPath)
    } else if (value.size === 1) {
      //iterate through each node to find it's neighbors
      dfs(key);
      // console.log('total found', maxPopulation)

    }

    const message = `${key}:${maxPopulation}`;
    result.push(message);
    maxPopulation = 0;
    reviewed = new Set()

  }

  console.log('final result', result)
  return result
}


// keep this function call here 
console.log(CityTraffic(["1:[5]", "2:[5]", "3:[5]", "4:[5]", "5:[1,2,3,4]"]));
// console.log(CityTraffic(["1:[5]", "2:[5,18]", "3:[5,12]", "4:[5]", "5:[1,2,3,4]", "18:[2]", "12:[3]"])); // EXPECTED OUTPUT: 1:44,2:25,3:30,4:41,5:20,12:33,18:27 >>