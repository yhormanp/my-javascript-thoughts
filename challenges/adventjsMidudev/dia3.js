/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

// const letter = "(muñeca) consola bici<";
const letter ="()mia"
// const letter = "({[})"

function isValid(letter) {
  const regex = /\w|\s|[Á-ú]/;
  const noEmptyParenthesis = /\({1}\){1}/
  if(noEmptyParenthesis.test(letter)){
      console.log('hay parentesis vacios')
      return false
  }
  let stack = [];
  const characters = { ")": "(", "}": "{", "]": "[" };
  for (const char of letter) {
    if (!regex.test(char)) {
      if (characters[char]) {
        console.log("si está", char, characters[char]);
        const aBorrar = stack[stack.length - 1];
        console.log("val", aBorrar, characters[char]);
        if (aBorrar === characters[char]) {
          console.log("el borrado concuerda", aBorrar, characters[char]);
          stack.pop();
          console.log('stack updated',stack)
        } else {
            console.log('el borrano NO concuerda', aBorrar, characters[char])
            return false
        }
      } else {
        console.log("no está", char, characters[char]);

        stack.push(char);
        console.log("agregado", stack);
      }
      //   if (characters[char] && stack.pop() !== characters[char]) {
      //     return false;
      //   } else {
      //     stack.push(char);
      //     console.log(stack);
      //   }
    }

    //     console.log('char', char)
    //   if (!characters[char]) {
    //       console.log('añadido', char)
    //     stack.push(char);
    //   }
    //   else if (stack.pop() !== characters[char]) {
    //     console.log('removido', char)
    //     return false;
    //   }
  }
  return stack.length === 0
}

console.log(isValid(letter));
