// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}


/*
Test Cases:
myFunction(['Alf', 'Alice', 'Ben'])
Expected
{ a: ['Alf', 'Alice'], b: ['Ben']}
myFunction(['Ant', 'Bear', 'Bird'])
Expected
{ a: ['Ant'], b: ['Bear', 'Bird']}
myFunction(['Berlin', 'Paris', 'Prague'])
Expected
{ b: ['Berlin'], p: ['Paris', 'Prague']}
*/

function myFunction(input) {

    return input.reduce((result, value) => {
        const character = value.slice(0,1).toLowerCase();
        result[character] = result[character] ? [...result[character], value]: [value];
        return result;
    }, {})

 }

 console.log(myFunction(['Alf', 'Alice', 'Ben']));
 console.log(myFunction(['Ant', 'Bear', 'Bird']))
 console.log(myFunction(['Berlin', 'Paris', 'Prague']))


 //another way to do it

 function myFunction2(array) {
    return array.reduce((acc, cur) => {
      const firstLetter = cur.toLowerCase().charAt(0);
      return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
    }, {});
   }

   console.log(myFunction2(['Alf', 'Alice', 'Ben']));
   console.log(myFunction2(['Ant', 'Bear', 'Bird']))
   console.log(myFunction2(['Berlin', 'Paris', 'Prague']))