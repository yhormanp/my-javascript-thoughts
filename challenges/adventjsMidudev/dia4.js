/* 
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/
function createXmasTree(height) {
  const totalSpaces = 2 * height - 1;
  let treeString = "";
  console.log("totalspaces", totalSpaces);
  for (var i = 0; i < height; i++) {
    // 2n+1 stars per row i.e. 1, 3, 5, 7, ...
    const oddNumber = 2 * i + 1;
    var stars = "*".repeat(oddNumber);
    // console.log('calc', ( (totalSpaces - oddNumber) /2), oddNumber);
    const qtySideSpaces = (totalSpaces - oddNumber) / 2;
    var sideSpaces = "_".repeat(qtySideSpaces);
    treeString += sideSpaces + stars + sideSpaces + "\n";
  }
  treeString += createBase(height);
  console.log(treeString);
  return treeString;
}

function createBase(height) {
  let baseString = "";
  const oddNumber = 2 * height - 1;
  const qtySideSpaces = (oddNumber - 1) / 2;
  var sideSpaces = "_".repeat(qtySideSpaces);
  baseString += sideSpaces + "#" + sideSpaces + "\n";
  baseString += sideSpaces + "#" + sideSpaces;
  return baseString;
}

createXmasTree(2);
