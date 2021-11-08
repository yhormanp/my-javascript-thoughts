// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
    const valueToCompare = arr[0];
    return arr.every((element) => element === valueToCompare);

}

console.log(myFunction(['hola', 'hola', 'hola']));
console.log(myFunction(['hola', true, 'hola']));
console.log( myFunction([2, 2, , 4]));
console.log( myFunction(['you', 'you', 'you']));


// another way to do it
function myFunction2(input){
    return new Set(input).size === 1;
}
console.log('my function 2')
console.log(myFunction2(['hola', 'hola', 'hola']));
console.log(myFunction2(['hola', true, 'hola']));
console.log( myFunction2([2, 2, , 4]));
console.log( myFunction2(['you', 'you', 'you']));

const dataDistinct = new Set ( ['usd','mxn', 'eur','usd','eur']);
console.log(dataDistinct.has('usd'))

// this does not work with Set because two objects with the same values are not equal, because they are pointin to a different
// space in memory
const dataInSet = new Set ( [{name: 'jhon', value: 1}, {name: 'jenny', value : 2}, {name: 'jhon', value: 1} ])


for(let user of dataInSet){
    console.log(user);
}