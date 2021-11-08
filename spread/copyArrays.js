// you can create a copy of the original array to do some changes avoiding changes in the original array;

let thisArray = ['I','am','a','fullstack','developer'];
let copyArray = [...thisArray];
copyArray[3] = 'Backend';

console.log(thisArray.join(' ')); // I am a fullstack developer
console.log(copyArray.join (' '));// I am a Backend developer