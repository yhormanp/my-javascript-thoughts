/*
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el 
almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén 
y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en 
algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false
*/

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta", // <- ¡Está aquí!
    },
  },
};

contains(almacen, "camiseta"); // true

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: "cd-rom",
      "otro-objeto": "disquette",
      "otra-cosa": "mando",
    },
  },
};

contains(otroAlmacen, "gameboy"); // false

function contains(store, product) {
  let isFound = false;

  const mainKeys = Object.keys(store);
  const responses = mainKeys.map((layer) => {
    return validateExistsElement(store[layer], product);
  });
  console.log('responses', responses)
  console.log(`product ${product} was found`, responses.includes(true));
  // when all the responses have been received, then check if they include a true
  return responses.includes(true);
}

function validateExistsElement(container, product) {
//   let elementWasFound = false;

  //   console.log("validating", container);
  //checking the properties of the object received
  const mainKeys = Object.keys(container);
  //   console.log('properties found', mainKeys);
  // iteraing over the properties found
  const responses = mainKeys.map((layer) => {
    //   console.log('validating type', typeof container[layer], container[layer], product )

    //if the property is directly a text, then compare if it's the product to be searched
    if (typeof container[layer] === "string" && container[layer] === product) {
        console.log('element found', layer);
      //   elementWasFound = true;
      return true;
    } else if (typeof container[layer] === "object") {
      // if the property is another object, then use recurusivity to validate with the same function
      //   elementWasFound = validateExistsElement(container[layer], product);
      return validateExistsElement(container[layer], product);
    }
  });
    console.log('child response', container, responses, product);
  //after validating every child of the object, return a response
//   console.log('child reponses', responses);
  return responses.includes(true);
}
