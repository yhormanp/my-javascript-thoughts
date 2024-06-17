/* given an  array with 2 values, validate if each letter of the word located in the 
second position of the array is in the word located in the first position of the array
it does not matter if its caps or lower or how many time exists, it's only if exists 
*/

function mutation(arr) {

  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().indexOf(letter) !== -1);
}

console.log( mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["Noel", "Ole"]));
