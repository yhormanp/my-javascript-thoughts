// this is somthing synchronous
let generateError = false;

const datos = [
  { id: 1, title: "Iron Man", year: 2008 },
  { id: 2, title: "Spiderman Homecoming", year: 2017 },
  { id: 3, title: "Avengers End game", year: 2019 },
];

const getDatos = () => {
  return datos;
};

console.log("info obtain in a synchronous way", getDatos()); // return the list of datos

// simulatin asynchronous process
const getDatos2 = () => {
  setTimeout(() => {
    return datos;
  }, 1500);
};

console.log("info obtain in an Asynchronous way", getDatos2()); // undefined

/*
Promises are an special object from javascript that allow us to execute a piece of code and when it's ready, it will return the 
response, but if there is an error, the error will be returned.
*/

const getDatos3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

getDatos3()
  .then((datos) => console.log("datos 3 received using Promises", datos))
  .catch((error) => console.log("error with datos 3", error));

// using await to obtain the datos from a promise

async function fetchingData3() {
  try {
    const datosFetched = await getDatos3();
    console.log("printin datosFetched in getDatos3", datosFetched);
  } catch (error) {
    console.error(error);
  }
}

fetchingData3();

// trying to cause an error  to catch it

const newDatos = [];
const getDatos4 = () => {
  return new Promise((resolve, reject) => {
    if (newDatos.length === 0) {
      reject(new Error("There is no data to be shown"));
    }
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

async function fetchingData4() {
  try {
    const datosFetched = await getDatos4();
    console.log("printing datosFetched in getDatos4", datosFetched);
  } catch (error) {
    console.error(error);
  }
}

fetchingData4();